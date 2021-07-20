function Photo({ photolink, photo, title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <img alt={photolink.alt} src={`${photolink.url}`} />
      <img alt={photolink.alt} src={`${photo.url}`} />
      <h3>{description}</h3>
    </div>
  );
}
export default Photo;
