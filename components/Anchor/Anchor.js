const Anchor = ({ children, url }) =>
    url ? <a href={url}>{children}</a> : <span>{children}</span>;

export default Anchor;
