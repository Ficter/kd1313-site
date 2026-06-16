# KD1313 | Kingdom of Driftwood

Next.js website and member command center for `kd1313.com`, built for the Kingdom 1313 / Kingdom of Driftwood Rise of Kingdoms community.

## Public Pages

- `/` - Landing page and kingdom identity
- `/alliances` - Public alliance directory
- `/rules` - Public kingdom rules
- `/events` - Public event board
- `/login` - Member login placeholder

## Members Area

- `/members` - Command dashboard
- `/members/newsletter` - Weekly newsletter
- `/members/mge` - MGE rank board
- `/members/kvk` - KVK preparation room
- `/members/tools` - Tools and roadmap
- `/members/roster` - Player roster
- `/members/council` - Officer/council placeholder

The members area currently contains placeholder content only. Do not post sensitive KVK plans until Supabase auth and role protection are connected.

## Environment Variables

Copy `.env.example` into Vercel environment variables when ready:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_DISCORD_INVITE_URL`

## Deploy With GitHub And Vercel

1. Push this repository to GitHub.
2. In Vercel, import the GitHub repository.
3. Framework should auto-detect as Next.js.
4. Add `kd1313.com` and `www.kd1313.com` in Vercel Domains.
5. Update DNS at Hostinger to point to Vercel.
6. Confirm both domain versions load with HTTPS.

## Future Discord Bot Ideas

- Discord login
- Discord role mapping for member access
- Website announcements posted to Discord
- Event reminders
- War attendance tracking
- Migration application status sync

## Legal Note

This is an unofficial community website. Rise of Kingdoms belongs to its respective owner.
