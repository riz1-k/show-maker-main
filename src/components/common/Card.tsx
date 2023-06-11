/* eslint-disable @next/next/no-img-element */
interface Props {
  title: string;
  description: string;
  index: number;
}

export default function Card(props: Props) {
  return (
    <div className="w-full px-4 md:w-1/2 xl:w-1/3">
      <div className="mb-10 overflow-hidden rounded-lg bg-white">
        <img
          src={`/cards/card-01/img-0${props.index}.jpg`}
          alt="image"
          className="w-full h-[230px] object-cover"
        />
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3>
            <a className="mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
              {props.description}
            </a>
          </h3>
          <p className="mb-7 text-base leading-relaxed text-body-color">
            {props.title}
          </p>
        </div>
      </div>
    </div>
  );
}
