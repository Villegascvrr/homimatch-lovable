-- Create profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  auth_user_id UUID UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  first_name TEXT,
  last_name TEXT,
  username TEXT UNIQUE,
  email TEXT,
  bio TEXT,
  edad INTEGER,
  ocupacion TEXT,
  universidad TEXT,
  interests TEXT[],
  lifestyle JSONB,
  city_zone TEXT,
  has_apartment BOOLEAN DEFAULT false,
  companeros_count INTEGER,
  budget_min INTEGER,
  budget_max INTEGER,
  profile_image TEXT,
  profile_image_id TEXT,
  is_profile_active BOOLEAN DEFAULT true,
  completed BOOLEAN DEFAULT false,
  skips INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create matches table
CREATE TABLE public.matches (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id_1 UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  profile_id_2 UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  compatibility INTEGER,
  UNIQUE(profile_id_1, profile_id_2)
);

-- Create messages table
CREATE TABLE public.messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  match_id UUID REFERENCES public.matches(id) ON DELETE CASCADE,
  sender_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  read BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create profile_matches table (for swipe tracking)
CREATE TABLE public.profile_matches (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  matched_profile_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(profile_id, matched_profile_id)
);

-- Create profile_discards table (for swipe tracking)
CREATE TABLE public.profile_discards (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  discarded_profile_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(profile_id, discarded_profile_id)
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.matches ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profile_matches ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profile_discards ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view all active profiles"
  ON public.profiles FOR SELECT
  USING (is_profile_active = true OR auth.uid() = auth_user_id);

CREATE POLICY "Users can insert their own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = auth_user_id);

CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = auth_user_id);

-- RLS Policies for matches
CREATE POLICY "Users can view their own matches"
  ON public.matches FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE (profiles.id = matches.profile_id_1 OR profiles.id = matches.profile_id_2) 
      AND profiles.auth_user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create matches"
  ON public.matches FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE profiles.id = profile_id_1 
      AND profiles.auth_user_id = auth.uid()
    )
  );

-- RLS Policies for messages
CREATE POLICY "Users can view messages in their matches"
  ON public.messages FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.matches 
      JOIN public.profiles ON (profiles.id = matches.profile_id_1 OR profiles.id = matches.profile_id_2)
      WHERE matches.id = messages.match_id 
      AND profiles.auth_user_id = auth.uid()
    )
  );

CREATE POLICY "Users can send messages in their matches"
  ON public.messages FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE profiles.id = sender_id 
      AND profiles.auth_user_id = auth.uid()
    )
  );

-- RLS Policies for profile_matches
CREATE POLICY "Users can view their own matches history"
  ON public.profile_matches FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE profiles.id = profile_id 
      AND profiles.auth_user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create match records"
  ON public.profile_matches FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE profiles.id = profile_id 
      AND profiles.auth_user_id = auth.uid()
    )
  );

-- RLS Policies for profile_discards
CREATE POLICY "Users can view their own discards"
  ON public.profile_discards FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE profiles.id = profile_id 
      AND profiles.auth_user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create discard records"
  ON public.profile_discards FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE profiles.id = profile_id 
      AND profiles.auth_user_id = auth.uid()
    )
  );

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for profiles updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();