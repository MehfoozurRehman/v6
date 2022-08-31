import ClientCard from "./ClientCard";

export default function Clients() {
  return (
    <section id="clients__section" className="services__section">
      <div className="services__section__header">
        <div className="home__section__sub__heading">
          Who I have worked with
        </div>
        <div className="home__section__heading">Clients</div>
      </div>
      <div
        className="services__section__content services__section__content__reverse"
        style={{ marginRight: "-2em" }}
      >
        <div className="services__section__content__col">
          <ClientCard
            image="https://res.cloudinary.com/mehfoozurrehman/image/upload/v1652953683/dsme_global/xxu5mv3bttbyshstnh4o.webp"
            url="https://dsmeglobals.web.app/"
          />
          <ClientCard
            image="https://res.cloudinary.com/mehfoozurrehman/image/upload/v1652953748/dsme_global/jsmxlwnwrpcus85rtlcg.webp"
            url="https://dsmeglobals.web.app/"
          />
          <ClientCard
            image="https://positive-pak.web.app/static/media/logo.1fd4411c.svg"
            url="https://dsmeglobals.web.app/"
          />
        </div>
        <div className="services__section__content__col">
          <ClientCard
            image="https://res.cloudinary.com/mehfoozurrehman/image/upload/v1652953818/dsme_global/k8h1x7j6yu2vg0qallcj.webp"
            url="https://dsmeglobals.web.app/"
          />
          <ClientCard
            image="https://res.cloudinary.com/mehfoozurrehman/image/upload/v1652955779/dsme_global/djov0em3g0anrwamsaen.webp"
            url="https://dsmeglobals.web.app/"
          />
          <ClientCard
            image="https://res.cloudinary.com/mehfoozurrehman/image/upload/v1652954066/dsme_global/wtmzbduiojzs1qubzjvi.webp"
            url="https://dsmeglobals.web.app/"
          />
          <ClientCard
            image="https://pacex-web.web.app/assets/logo.542aef68.svg"
            url="https://dsmeglobals.web.app/"
          />
          <ClientCard
            image="https://rlb-dashboard.web.app/static/media/NoPath.b442dcf7.webp"
            url="https://dsmeglobals.web.app/"
          />
        </div>
        <div className="services__section__content__col">
          <ClientCard
            image="https://dsmeglobals.web.app/static/media/logoDark.4027353b32e5c69aabd79c857d51be55.svg"
            url="https://dsmeglobals.web.app/"
          />
          <ClientCard
            image="data:image/png;base64,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"
            url="https://dsmeglobals.web.app/"
          />
          <ClientCard
            image="https://bitflydex.web.app/assets/logo.3a72d94c.webp"
            url="https://dsmeglobals.web.app/"
          />
        </div>
        <div className="services__section__content__col">
          <ClientCard
            image="https://aida-pro.web.app/static/media/aidaLogo.6f4372ac.svg"
            url="https://dsmeglobals.web.app/"
          />
          <ClientCard
            image="https://ocean-cart.web.app/static/media/logo.67c9d2f0.svg"
            url="https://dsmeglobals.web.app/"
          />
          <ClientCard
            image="https://aigron-web.web.app/assets/logo.ea1b3c10.svg"
            url="https://dsmeglobals.web.app/"
          />
          <ClientCard
            image="https://whitewalker-inu.web.app/static/media/logo.b57853b2238c1aa068ca.webp"
            url="https://dsmeglobals.web.app/"
          />
          <ClientCard
            image="https://teamsvue.web.app/static/media/logo.e1089565.svg"
            url="https://dsmeglobals.web.app/"
          />
        </div>
        <div className="services__section__content__col">
          <ClientCard
            image="https://finfac-web.web.app/static/media/logo.ff9fdd8f37fb20f2c6e08931153b1800.svg"
            url="https://dsmeglobals.web.app/"
          />
          <ClientCard
            image="https://lgs-school.web.app/static/media/logo.6435500b3d05ea58f39a75ad5429d14d.svg"
            url="https://dsmeglobals.web.app/"
          />
          <ClientCard
            image="https://picode-web.web.app/assets/logo.f77205d4.webp"
            url="https://dsmeglobals.web.app/"
          />
        </div>
      </div>
    </section>
  );
}
