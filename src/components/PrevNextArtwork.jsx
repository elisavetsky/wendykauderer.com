export default function PrevNextArtwork({prevArtwork, nextArtwork}) {
   return (
      <nav class="flex justify-between py-4" aria-label="previous artwork and next artwork navigation">
         <a href={`/${prevArtwork}`} class="">Previous</a>
         <a href="" class="">Next</a>
      </nav>
   )
}