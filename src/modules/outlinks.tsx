const OuterLink = (props: { text: string; link: string }) => {
  return (
    <>
      {" "}
      <a href={props.link} target="_blank" rel="noreferrer noopener">
        {props.text}
      </a>
    </>
  );
};

export default OuterLink