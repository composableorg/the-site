import React from "react";

export interface BaseAnchorProps {
    anchorText : string
};

export const Anchor = ({ anchorText, ...props}: BaseAnchorProps) => (
    <a {...props}>{anchorText}</a>
);
