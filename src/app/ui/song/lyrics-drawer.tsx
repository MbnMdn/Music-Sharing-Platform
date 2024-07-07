import * as React from "react"
import {Button} from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
// import {useMediaQuery} from "@react-hook/media-query";
import {MdOutlineLyrics} from "react-icons/md";
import MusicPic from "@/app/ui/dashboard/assets/music-pic.jpg";


const song = {
    id: 1,
    cover: {MusicPic},
    name: 'Mockingbird',
    singer: 'Eminem',
    album: 'blah',
    lyrics: '[ Intro ]\n' +
        '\n' +
        'Yeah\n' +
        'I know sometimes things might not always make sense to you right now\n' +
        'But hey, what daddy always tell you’ Straighten up little soldier\n' +
        'Stiffen up that upper lip What’chu crying about?\n' +
        'You got me..\n' +
        '\n' +
        '[ Verse 1 ]\n' +
        '\n' +
        'Hailie, I know you miss your mom and I know you miss your dad\n' +
        'When I’m gone but I’m trying to give you the life that I never had\n' +
        'I can see you’re sad, even when you smile even when you laugh\n' +
        'I can see it in your eyes deep inside, you wanna cry\n' +
        'Cause you’re scared I ain’t there, Daddy’s with you in your prayers\n' +
        'No more cryin wipe them tears, Daddy’s here no more nightmares\n' +
        'We gonna pull together through it we gonna do it\n' +
        'Lainie, uncle’s crazy ain’t he, yeah but he loves you girl and you better know it\n' +
        'We’re all we got in this world when it spins, when it swirls\n' +
        'When it whirls, when it twirls, two little beautiful girls\n' +
        'Lookin puzzled, in a daze I know it’s confusing you\n' +
        'Daddy’s always on the move, Mama’s always on the news\n' +
        'I try to keep you sheltered from it but somehow it seems\n' +
        'The harder that I try to do that the more it backfires on me\n' +
        'All the things, growin up as daddy that he had to see\n' +
        'Daddy don’t want you to see but you see just as much as he did\n' +
        'We did not plan it to be this way your mother and me\n' +
        'But things have got so bad between us I don’t see us ever being together ever again\n' +
        'Like we used to be like when was teenagers but then of course everything always happen for a reason\n' +
        'I guess it was never meant to be but it’s just something we have no control over\n' +
        'And that’s what destiny is, but no more worries rest your head and go to sleep\n' +
        'Maybe one day we’ll wake up and this will all just be a dream\n' +
        '\n' +
        '[ Chorus ]\n' +
        '\n' +
        'Now hush little baby don’t you cry everythings gonna be alright\n' +
        'Stiffen that upper lip up little lady I told ya\n' +
        'Daddy’s here to hold ya through the night\n' +
        'I know mommy’s not here right now and we don’t know why\n' +
        'We fear how we feel inside\n' +
        'It may seem a little crazy, pretty baby\n' +
        'But I promise Mama’s gon be alright\n' +
        '\n' +
        '[ Verse 2 ]\n' +
        '\n' +
        'It’s funny, I remember back one year when daddy had no money\n' +
        'Mommy wrapped the Christamas presents up and stuck em under the tree\n' +
        'and said some of em were from me cause daddy couldn’t buy em\n' +
        'I’ll never forget that Christmas I sat up the whole night cryin\n' +
        'Cause daddy felt like a bum, see Daddy had a job\n' +
        'But his job was to keep the food on the table for you and mom\n' +
        'And at the time every house that we lived in\n' +
        'Either kept getting broken into and robbed or shot up on the block\n' +
        'And your mom, was saving money for you in a jar trying to start a piggy bank for you\n' +
        'So you could go to college, almost had a thousand dollars\n' +
        'Till someone broke in and stole it and I know it hurt so bad it broke your mamma’s heart\n' +
        'And it seemed like everything was just starting to fall apart\n' +
        'Mom and dad was arguing a lot so mama moved back on the chalmers in a flat\n' +
        'One bedroom apartment and dad moved back to the other side of 8 mile on Novara\n' +
        'And that’s when Daddy went to California with his CD\n' +
        'And met Dr. Dre and flew you and Mama out to see me\n' +
        'But daddy had to work, you and mama had to leave me\n' +
        'Then you started seeing daddy on the TV, and mama didn’t like it\n' +
        'And you and Lainie were too young to understand it\n' +
        'That Papa was a rolling stone, Mama developed a habit\n' +
        'And it all happened too fast for either one of us to grab it\n' +
        'I’m just sorry you were there and had to witness it first hand\n' +
        'Cause all I ever wanted to do was just make you proud\n' +
        'Now I’m sittin in this empty house, just reminiscing\n' +
        'Looking at your baby pictures it just trips me out\n' +
        'To see how much you both have grown, it’s almost like your sisters now\n' +
        'Wow, I guess you pretty much are and daddy’s still here\n' +
        'Lainie I’m talking to you too, Daddy’s still here\n' +
        'I like the sound of that, yeah it’s got a ring to it, don’t it?\n' +
        'Shhh, mama’s only gone for the moment\n' +
        '\n' +
        '[ Chorus ]\n' +
        '\n' +
        '[ Outro ]\n' +
        '\n' +
        'And if you ask me to, Daddy’s gonna buy you a mocking bird\n' +
        'I’ma give you the world, I’ma buy a diamond ring for you\n' +
        'I’ma sing for you, I’ll do anything for you to see you smile\n' +
        'And if that mockingbird don’t sing and the ring don’t shine\n' +
        'I’ma break that birdies neck\n' +
        'I’ll go back to the jeweler who sold it to ya\n' +
        'And make him eat every karat, don’t fuck with dad\n' +
        '\n',
    release_year: '2002',
    genre: 'genre'
};

export default function LyricsDrawer() {
    const [open, setOpen] = React.useState(false)
    // const isDesktop = useMediaQuery("(min-width: 768px)")

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <p className="text-sm lg:text-sm font-semibold flex gap-1">Lyrics <MdOutlineLyrics
                    className="md:self-center"/></p>
            </DrawerTrigger>
            <DrawerContent className="flex align-middle items-center text-gray-100 h-2/3  bg-neutral-800 border-none focus-visible:border-none focus-visible:bg-neutral-800 focus-visible:outline-none">
                <DrawerHeader className="text-left">
                    <DrawerTitle>{song.name}</DrawerTitle>
                    <DrawerDescription>
                    </DrawerDescription>
                </DrawerHeader>
                <div className="items-start gap-4 w-2/3 text-justify overflow-y-auto">
                    {song.lyrics}
                </div>
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline" className="block bg-transparent hover:bg-neutral-700 hover:text-white mt-5">Close</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}




