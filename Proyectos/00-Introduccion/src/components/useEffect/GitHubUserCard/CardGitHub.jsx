const CardGitHub = ({ login, url, img }) => {
  return (
    <div className="relative flex p-6 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md my-5">
        <div className="relative mx-4 mt-6 h-40 overflow-hidden rounded-xl bg-blue-500 bg-clip-border text-white shadow-lg">
            <img
            src={img}
            alt={login}
            className="rounded-full w-32 h-32 my-4 mx-auto cursor-pointer"
            />
        </div>
        <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug text-blue-900 antialiased tracking-normal">
                {login}
            </h5>
            <a className="block font-mono text-base font-light leading-relaxed text-sky antialised line-break"
            href={url}>
                {url}
            </a>
        </div>
        <div>
            <button className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-blue hover:shadow-lg hover:shadow-blue-900/80">
                IR A GITHUB
            </button>
        </div>
    </div>
  )
}

export default CardGitHub