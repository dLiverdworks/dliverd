import classNames from "classnames";

type Props = JSX.IntrinsicElements["button"] & {
    size?: "normal" | "large";
    isFullWidth?: boolean;
};

const Button: React.FC<Props> = ({ size = "normal", isFullWidth = false, ...rest }) => {
    return (
            <button className={classNames("bg-blue-800 hover:bg-blue-700 text-sm font-sans text-white px-4 rounded-full disabled:text-slate-400 disabled:bg-slate-200",
                {
                    "h-6": size === "normal",
                    "h-8": size === "large",
                    "w-full": isFullWidth,
                }
            )}
            {...rest} 
        />
    );
};

export default Button;