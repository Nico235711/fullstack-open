
export const Filter = ({ search, setSearch }) => {

  return (
    <form>filter shown with
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  )
}
