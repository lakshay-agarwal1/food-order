
// eslint-disable-next-line no-unused-vars
export const withLabel = (ResCard) => {
  return (props) => {
    return (
      <>
        <label className="label">Promoted</label>
        <ResCard {...props} />
      </>
    );
  };
};
