export default function BackgroundImage({ image, children }) {
  return (
    <>
      <div
        className={`bg-cover bg-center md:block relative`}
        style={{ backgroundImage: `url("/${image}")` }}
      >
        <div className="">{children}</div>
      </div>
    </>
  )
}
