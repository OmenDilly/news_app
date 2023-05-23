import React, {FC, SetStateAction} from 'react'
import SearchInput from '../ui/searchInput/SearchInput'
import Dropdown from '../ui/dropdown/Dropdown'
import classes from './postfilter.module.css'

export type Filter = {sort: string, search: string}

interface PostFilterProps {
  filter: Filter;
  setFilter: React.Dispatch<SetStateAction<Filter>>;
}

const sortOptions = [
  {
    value: 'title',
    title: 'title'
  },
  {
    value: 'created',
    title: 'created'
  },
]

const PostFilter: FC<PostFilterProps> = ({filter, setFilter}) => {
  return (
    <div className={classes.postFilter}>
      <SearchInput
        value={filter.search}
        className={classes.searchInput}
        onChange={(event) => setFilter(prevFilter => ({...prevFilter, search: event.target.value}))}
        placeholder='Search for posts...'
      />
      <Dropdown
        defaultOption='Sort by'
        options={sortOptions}
        value={filter.sort}
        onChange={(sort) => setFilter(prevFilter => ({...prevFilter, sort: sort}))}
      />
    </div>
  )
}

export default PostFilter