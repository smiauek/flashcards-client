# Flashcards APP  
  
  This app allows registered users to create/update/delete their own decks of flashcards. Both registered and non-registered users can view/study all existing decks of flashcards.  
    
Deployed app can be found [here](https://bestflashcardapp.herokuapp.com/)  

API for this app can be found [here](https://github.com/smiauek/flashcards-server)  
  
## Tech:  
- React for state management and rendering
- Bootstrap for styling  
  
## Preview:  
Home page is automatically redirected to `/browse` where we can see all existing decks. Left side menu allows us to register new account, sign in if we already have an account or search for specific decks.  
![browse](/pics/browse.png)  
  
After succesful login, we're being redirected to `/dashboard` where we can see only decks that belong to us. Dashboard also allows us to create/update/delete both decks and individual cards. Left side menu for logged in users is slightly different, it gives us options to sign out, see our account details or use dashboard, browse and search options remain unchanged for both logged in and not logged in users.  
![dashboard1](/pics/dashboard.png)  
  
![dashboard2](/pics/dashboard2.png)  
  
  

