export default function Footer() {
  return (
    <footer className="footer footer-center p-10 lg:pt-16 bg-base-100">
      <div>
        <p className="font-bold">
          Template by 
          <a
            href="https://github.com/agil3st/portflow-nuxtjs"
            className="text-indigo-400"
            target="_blank">&nbsp;
              Portflow.
          </a>
          <br />A simple portfolio web template
        </p>
        <p>Copyright © 2023 - Made with 💖 by Agil</p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-2">
          <a
            href="social.data.link.iv"
            target="_blank"
            className="btn btn-sm bg-transparent border-none hover:bg-indigo-700 text-indigo-600 dark:text-white hover:text-white">
              <i className=""></i>
            </a>
        </div>
      </div>
    </footer>
  )
}
