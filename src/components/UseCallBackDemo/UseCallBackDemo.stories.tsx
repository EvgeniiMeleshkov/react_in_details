import React, {useCallback, useMemo, useState} from 'react';

export default {
    title: 'React.memo demo'
}

const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>
}

const BooksSecret = (props: {  addBook: () => void }) => {
    console.log('BooksSecret')
    return <div>
        <button onClick={props.addBook}>add book</button>
        {
        // props.books.map((el, i) => <div key={i}>{el}</div>)
    }</div>
}

const Books = React.memo(BooksSecret)

export const LikeUseCallBack = () => {
    console.log('LikeUseCallBack')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])

    // const newArray = useMemo(()=> {
    //     const newArray = books.filter(b => b.toLowerCase().indexOf('a') > -1)
    //     return newArray
    // }, [books])


    const memoizedAddBook = useCallback(()=> {
            const newBooks = [...books,'Angular ' + new Date().toLocaleTimeString()]
            setBooks(newBooks)
    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <NewMessagesCounter count={counter}/>
        <Books addBook={memoizedAddBook}/>
    </>
}