import { MemberTools } from "@/components/MemberTools";
import { MemberShell } from "@/components/MemberShell";

export default function ToolsPage() {
  return (
    <MemberShell>
      <div className="dash-title">
        <div>
          <div className="eyebrow">Member Lounge</div>
          <h1>Tools that help people show up on time.</h1>
        </div>
        <span className="tag">Interactive</span>
      </div>
      <MemberTools />
    </MemberShell>
  );
}
