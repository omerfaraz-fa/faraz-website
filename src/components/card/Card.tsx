import CardHeader from "./CardHeader";
import CardQRCode from "./CardQRCode";
import CardActions from "./CardActions";

export default function Card() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">

      <CardHeader />

      <CardQRCode />

      <CardActions />

    </div>
  );
}