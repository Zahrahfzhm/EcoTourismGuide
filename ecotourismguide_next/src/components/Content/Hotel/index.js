import * as React from "react";

const Card = ({ imageSrc, title, content, buttonText }) => (
  <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
    <article className="flex flex-col grow justify-center w-full font-bold bg-white rounded-lg max-md:mt-8">
      <div className="flex flex-col px-3.5 pt-7 pb-3 bg-white rounded-lg">
        <img
          loading="lazy"
          src={imageSrc}
          alt={title}
          className="w-full aspect-[1.27]"
        />
        <header className="mt-3.5 text-2xl leading-7 text-emerald-500">{title}</header>
        <p className="mt-2.5 mr-6 text-base leading-6 text-neutral-600 max-md:mr-2.5">
          {content}
        </p>
        <button
          className="flex flex-col justify-center mt-5 text-lg leading-6 text-center text-white bg-emerald-500 rounded-lg px-16 py-2.5 max-md:pr-8 max-md:pl-5"
          type="button"
        >
          {buttonText}
        </button>
      </div>
    </article>
  </div>
);

function MyComponent() {
  const cardsData = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a06c082c59fa60cb89d1afc189f506c61747fda1b891f13806b07d8a93dcc62b?apiKey=7efa433487f5452dbfc26a66cc5d9d42&",
      title: "Discovery Ancol",
      content:
        "Some quick example text to build on the card title and make up the bulk of the card's content. make up the bulk of the card's content.",
      buttonText: "Button Sample"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1e88c2b10df00940b9703fe6948dbdf0b320700f55022d77b7a218b4940da2d7?apiKey=7efa433487f5452dbfc26a66cc5d9d42&",
      title: "Putri Duyung Ancol",
      content:
        "Some quick example text to build on the card title and make up the bulk of the card's content. make up the bulk of the card's content.",
      buttonText: "Button Sample"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e9a8e9ed19639765a9cd996f92dd331d18c45e66ebe167e914fb666cbec9618d?apiKey=7efa433487f5452dbfc26a66cc5d9d42&",
      title: "Discovery Ancol",
      content:
        "Some quick example text to build on the card title and make up the bulk of the card's content. make up the bulk of the card's content.",
      buttonText: "Button Sample"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/77c57af02ca4afa08b58fd425ec432b78d8871d0328198caf620995746e936ba?apiKey=7efa433487f5452dbfc26a66cc5d9d42&",
      title: "Discovery Ancol",
      content:
        "Some quick example text to build on the card title and make up the bulk of the card's content. make up the bulk of the card's content.",
      buttonText: "Button Sample"
    }
  ];

  return (
    <section className="flex flex-col bg-green-200">

      <main className="flex flex-col items-start px-7 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <h1 className="ml-3.5 text-6xl font-semibold text-black max-md:max-w-full max-md:text-4xl">
          Atlantis Water Adventures Ancol
        </h1>
        <h2 className="mt-11 ml-3.5 text-2xl font-medium text-black max-md:mt-10 max-md:max-w-full">
          Penginapan disekitar Atlantis Water Adventures Ancol
        </h2>
        <section className="self-stretch mt-14 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {cardsData.map((card, index) => (
              <Card
                key={index}
                imageSrc={card.imageSrc}
                title={card.title}
                content={card.content}
                buttonText={card.buttonText}
              />
            ))}
          </div>
        </section>
      </main>

    </section>
  );
}

export default MyComponent;