const FooterCard = (props: any) => {
  return (
    <div className="flex flex-col gap-4 ">
      {props.footerData.map((f: string, i: number) => (
        <p key={i} className={`${i === 0 ? "font-bold" : "text-black/60 hover:underline cursor-pointer hover:scale-[1.05]"}  `}>{f}</p>
      ))}
    </div>
  );
};

export default FooterCard;
