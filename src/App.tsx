import BookmarkSection from './sections/BookmarkSection';
import FeedSection from './sections/FeedSection';
import IntroSection from './sections/IntroSection';
import MainSection from './sections/MainSection';
import SubscribeSection from './sections/SubscribeSection';

function App() {
  return (
    <div className="w-full h-full font-pretendard text-white items-center justify-center flex flex-col">
      <MainSection />
      <IntroSection />
      <FeedSection />
      <SubscribeSection />
      <BookmarkSection />
    </div>
  );
}

export default App;
