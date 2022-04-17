import React from "react";
import { classNames } from "@/utils/classNames/classNames";
enum Type {
    PRIMARY,
    FOOTER
}

export const TYPE_MAP: Record<Type, string> = {
    [Type.PRIMARY]: 'text-dark-hyperlink',
    [Type.FOOTER]: 'text-dark-primary',
}

export interface BaseAnchorProps {
    anchorText : string,
    anchorType ?: Type,
}

export const Anchor = ({ anchorText, anchorType = Type.PRIMARY,...props}: BaseAnchorProps) => (
    <a
        className={classNames(TYPE_MAP[anchorType] ?  TYPE_MAP[anchorType] : TYPE_MAP[Anchor.defaultProps.type])}
       {...props}
    >
        {anchorText}
    </a>
);

Anchor.type = Type;
Anchor.typeMap = TYPE_MAP;
Anchor.defaultProps = {
    type : Type.PRIMARY,
};
