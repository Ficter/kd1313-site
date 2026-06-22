# KD1313 | Kingdom of Driftwood

Next.js website and member command center for `kd1313.com`, built for the Kingdom 1313 / Kingdom of Driftwood Rise of Kingdoms community.

## Public Pages

- `/` - Landing page and kingdom identity
- `/alliances` - Public alliance directory
- `/rules` - Public kingdom rules
- `/events` - Public event board
- `/login` - Member login

## Members Area

- `/members` - Command dashboard
- `/members/newsletter` - Weekly newsletter
- `/members/mge` - MGE rank board
- `/members/kvk` - KVK preparation room
- `/members/tools` - Tools and roadmap
- `/members/roster` - Player roster
- `/members/council` - Officer/council placeholder

The members area supports Supabase Auth for individual member accounts. If Supabase keys are not configured yet, the site falls back to the temporary shared username/password gate so the live site does not break during setup.

## Environment Variables

Copy `.env.example` into Vercel environment variables when ready:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_DISCORD_INVITE_URL`
- `KD1313_MEMBER_USERNAME`
- `KD1313_MEMBER_PASSWORD`
- `KD1313_MEMBER_SESSION_SECRET`

`KD1313_MEMBER_SESSION_SECRET` can be any long random private value. If it is omitted, the password is used as the session secret.

## Supabase Member Login Setup

1. Create a Supabase project.
2. Copy the project URL into `NEXT_PUBLIC_SUPABASE_URL`.
3. Copy the anon public key into `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. In Supabase Auth, create member users with internal emails such as `arya@kd1313.local`.
5. Add `https://www.kd1313.com` as the site URL in Supabase Auth settings.
6. Add the Supabase variables in Vercel production environment variables.
7. Redeploy the site.

Once Supabase is active, members sign in with their username and password. The website turns usernames into internal emails behind the scenes, so `Arya` becomes `arya@kd1313.local`. Full email login still works if needed.

The old `KD1313_MEMBER_USERNAME`, `KD1313_MEMBER_PASSWORD`, and `KD1313_MEMBER_SESSION_SECRET` variables can stay as fallback during the transition.

## Deploy With GitHub And Vercel

1. Push this repository to GitHub.
2. In Vercel, import the GitHub repository.
3. Framework should auto-detect as Next.js.
4. Add `kd1313.com` and `www.kd1313.com` in Vercel Domains.
5. Update DNS at Hostinger to point to Vercel.
6. Confirm both domain versions load with HTTPS.

## Future Discord Bot Ideas

- Discord login and role linking
- Discord role mapping for member access
- Website announcements posted to Discord
- Event reminders
- War attendance tracking
- Migration application status sync

## Legal Note

This is an unofficial community website. Rise of Kingdoms belongs to its respective owner.
