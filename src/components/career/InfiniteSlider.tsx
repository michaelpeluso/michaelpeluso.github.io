import { FigmaLogoIcon, FramerLogoIcon, SketchLogoIcon, TwitterLogoIcon, GitHubLogoIcon, VercelLogoIcon, NotionLogoIcon, DiscordLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

// Define logos in an array with properties
const LOGOS = [
    { Icon: FigmaLogoIcon },
    { Icon: FramerLogoIcon },
    { Icon: SketchLogoIcon },
    { Icon: TwitterLogoIcon },
    { Icon: GitHubLogoIcon },
    { Icon: VercelLogoIcon },
    { Icon: NotionLogoIcon },
    { Icon: DiscordLogoIcon },
    { Icon: InstagramLogoIcon },
    { Icon: LinkedInLogoIcon },
];

export const InfiniteSlider = () => {
    return (
        <div className="relative m-auto w-[500px] overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
            <div className="animate-infinite-slider flex w-[calc(250px*10)]">
                {[...LOGOS, ...LOGOS].map(
                    (
                        { Icon },
                        index // Duplicate in one loop
                    ) => (
                        <div className="slide flex w-[125px] items-center justify-center" key={index}>
                            <Icon width={24} height={24} className="text-slate-800" />
                        </div>
                    )
                )}
            </div>
        </div>
    );
};
