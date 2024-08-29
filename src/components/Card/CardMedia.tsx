import type { MediaType, Ratio } from "@/types/type";

interface cardMediaProps {
	className?: string;
	ratio?: Ratio;
	type?: MediaType;
	src?: string;
	desc?: string;
	captionsSrc?: string;
	captionsLang?: string;
	captionsLabel?: string;
	autoPlay?: boolean;
}

function CardMedia({ className, ratio, type, src, desc, captionsSrc, captionsLang, captionsLabel, autoPlay }: cardMediaProps) {
	const mediaDom = () => {
		switch (type) {
			case "image":
				return <img className={ratio} src={src} alt={desc} />;
			case "video":
				return (
					// biome-ignore lint/a11y/useMediaCaption: <explanation>
					<video autoPlay={autoPlay} src={src}>
						{captionsSrc && (
							<track kind="captions" src={captionsSrc} srcLang={captionsLang} label={captionsLabel} />
						)}
					</video>
				);
			case "audio":
				return (
					// biome-ignore lint/a11y/useMediaCaption: <explanation>
					<audio controls>
						<source src={src} />
						{captionsSrc && (
							<track kind="captions" src={captionsSrc} srcLang={captionsLang} label={captionsLabel} />
						)}
					</audio>
				);
			default:
				return null;
		}
	};

	return <div className={className}>{mediaDom()}</div>;
}

export default CardMedia;
