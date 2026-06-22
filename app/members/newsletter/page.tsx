import { MemberShell } from "@/components/MemberShell";
import { memberPosts } from "@/lib/data";

export default function NewsletterPage() {
  return (
    <MemberShell>
      <div className="dash-title">
        <div>
          <div className="eyebrow">Member Posts</div>
          <h1>Command posts and kingdom notes.</h1>
        </div>
        <span className="tag">Curated</span>
      </div>
      <div className="post-stack">
        {memberPosts.map((post) => (
          <article className="notice long-post" key={post.title}>
            <div className="post-meta">
              <span className="tag">{post.category}</span>
              <small>{post.date} · {post.priority}</small>
            </div>
            <h2>{post.title}</h2>
            <p className="muted">{post.summary}</p>
            <ul>
              {post.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </MemberShell>
  );
}
