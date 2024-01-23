import type { CSSProperties, ReactElement } from "react";
import classNames from "classnames";
import "./index.scss";

export interface SegmentTimeProps {
    children?: ReactElement;
    className?: string;
    pixelRatio: number;
    segment: { duration: number; position: number };
    segmentStyle?: CSSProperties;
    onClick: (value: unknown) => void;
}

export interface SegmentTimeInstanceMethodType {
    changeOffsetPixels?: (currentPixels: number) => void;
}

const SegmentTime = ({ onClick, className, pixelRatio, segmentStyle, segment, children }: SegmentTimeProps) => {
    return (
        <div
            className={classNames(className)}
            style={{
                ...segmentStyle,
                width: `${segment.duration * pixelRatio}px`,
                left: `${segment.position * pixelRatio}px`,
            }}
            onClick={() => onClick(segment)}
        >
            {children}
        </div>
    );
};

export default SegmentTime;
