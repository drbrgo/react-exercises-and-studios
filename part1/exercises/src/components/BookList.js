export default function BookList() {
   let pageTitle = "Books that I might have read at some point!";
   let book1 = "https://parigibooks.cdn.bibliopolis.com/pictures/10663.jpg?v=1454036831";
   let book2 = "https://socks-studio.com/img/blog/31472889_265d8f4068_o.jpeg";
   let book3 = "https://ephemeralnewyork.files.wordpress.com/2015/09/frankoharapoems.png";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Difficult Loves" height={300} />
         <img src={book2} alt="Life: A User's Manual" height={300} />
         <img src={book3} alt="Lunch Poems" height={300}/>
      </div>      
   );
}