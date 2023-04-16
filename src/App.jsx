function Header() {
  return (
    <div>
      <header>
        <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
      </header>
    </div>
  );
}

function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <div id="posts-body">
          <label>
            Body:
            <input type="text" name="body" />
          </label>
          <div id="posts-image">
            <label>
              Image:
              <button>Choose File</button>
            </label>
          </div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

function PostsIndex() {
  return (
    <div id="posts-index">
      <h1>All posts</h1>

      <div className="cheese-ipsum">
        <h2>Cheese!</h2>
        <img src="cheese-fruits-18359800.jpg" alt="assortment cheese tray" />
        <p>
          Cheese and wine cow brie. Cheeseburger cheese on toast red leicester stinking bishop parmesan cheese on toast
          edam fromage frais. Macaroni cheese smelly cheese brie croque monsieur st. agur blue cheese smelly cheese
          cheese on toast cheeseburger. Cheesy feet who moved my cheese mozzarella cheese and biscuits ricotta cheddar
          dolcelatte edam. Cheeseburger. Taleggio cottage cheese chalk and cheese. Say cheese cow macaroni cheese
          mozzarella dolcelatte paneer red leicester camembert de normandie. Bocconcini edam cheeseburger who moved my
          cheese cheese on toast port-salut feta fondue. Emmental squirty cheese paneer taleggio croque monsieur ricotta
          blue castello squirty cheese. Cheesecake roquefort stinking bishop. Cut the cheese pecorino cottage cheese.
          Rubber cheese lancashire manchego taleggio cut the cheese chalk and cheese gouda cottage cheese. The big
          cheese blue castello lancashire hard cheese caerphilly cheese triangles lancashire cheesecake. Dolcelatte say
          cheese cottage cheese port-salut cheese strings cheese slices stilton everyone loves. Cottage cheese bavarian
          bergkase fondue paneer. Cut the cheese pepper jack cheesecake. Cow goat stinking bishop babybel cottage cheese
          fondue jarlsberg emmental.
        </p>
      </div>
      <div className="zombie-ipsum">
        <h2>Zombies!</h2>
        <img src="zombies.webp" alt="creepy zombie" />
        <p>
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora
          quaeritis. Summus brains sit, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.
          Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat
          cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos
          flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum
          cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead. Cum
          horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et
          serpens. Pestilentia, shaun ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague haec
          decaying ambulabat mortuos. Sicut zeder apathetic malus voodoo. Aenean a dolor plan et terror soulless
          vulnerum contagium accedunt, mortui iam vivam unlife. Qui tardius moveri, brid eof reanimator sed in magna
          copia sint terribiles undeath legionis. Alii missing oculis aliorum sicut serpere crabs nostram. Putridi
          braindead odores kill and infect, aere implent left four dead.
        </p>
      </div>
      <div className="kitty-ipsum">
        <h2>Kitties!</h2>
        <img src="kitties.jpeg" alt="two kitties sleeping" />
        <p>
          Catch mouse and gave it as a present carefully drink from water glass and then spill it everywhere and proceed
          to lick the puddle. Walk on a keyboard waffles fat baby cat best buddy little guy, scream for no reason at 4
          am stinky cat or has closed eyes but still sees you for paw at your fat belly. I am the best human is behind a
          closed door, emergency! abandoned! meeooowwww!!! so disappear for four days and return home with an expensive
          injury; bite the vet so whatever or cough hairball, eat toilet paper. Why can't i catch that stupid red dot i
          am the best. Lick butt and make a weird face slap owner's face at 5am until human fills food dish you are a
          captive audience while sitting on the toilet, pet me, for scratch the postman wake up lick paw wake up owner
          meow meow meowzer. Caticus cuteicus. Reaches under door into adjacent room sniff sniff asdflkjaertvlkjasntvkjn
          (sits on keyboard) cats making all the muffins cat fur is the new black for chase ball of string cat meoooow i
          iz master of hoomaan, not hoomaan master of i, oooh damn dat dog. Lies down Gate keepers of hell. Rub face on
          owner. Unwrap toilet paper. Have secret plans cat is love, cat is life yet kick up litter cat sit like bread,
          for where is it? i saw that bird i need to bring it home to mommy squirrel!
        </p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2023</p>
    </footer>
  );
}

function Content() {
  return (
    <div>
      <PostsNew />
      <PostsIndex />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
