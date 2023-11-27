interface ImageProps {
    width: number | string;
    alt: string;
    src: string;
    className?: string;
  }
  
  function Image(props: ImageProps) {
    return (
      <img
        width={props.width}
        alt={props.alt}
        src={props.src}
        className={props.className}
      />
    );
  }
  
  export default Image;
  