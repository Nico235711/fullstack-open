
export const Filter = ({ search, setSearch }) => {

  return (
    <div>
      filter shonw with {""}
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </div>
  )
}
