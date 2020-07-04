import React, {useState} from 'react'


const Search = ({getQuery}) => {
    const [text, setText] = useState('')
    
    const changeText = (e) => {
        setText(e)
        getQuery(e)
    }
    return (
        <section className='search'>
            <form>
                <input 
                type='text' 
                className='form-control' 
                placeholder='Search Characters' 
                value={text}
                onChange={(e) => changeText(e.target.value)}
                autoFocus/>
            </form>
        </section>
    )
}

export default Search
