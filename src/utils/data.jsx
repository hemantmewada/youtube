import {
  HomeIconActive,
  HistoryDeActive,
  ShortsIconActive,
  SubscriptionsDeActive,
  YourChannel,
  HomeIconDeActive,
  ShortsIconDeActive,
  SubscriptionsActive,
  HistoryActive,
  PlaylistActive,
  PlaylistDeActive,
  YourvideosDeActive,
  WatchlaterActive,
  WatchlaterDeActive,
  LikedvideosDeActive,
  YourclipsDeActive,
  LikedvideosActive,
  YourclipsActive,
  PodcastsDeActive,
  FashionAndBeautyDeActive,
  CoursesDeActive,
  SportsDeActive,
  NewsDeActive,
  GamingDeActive,
  LiveDeActive,
  MusicDeActive,
  ShoppingDeActive,
  TrendingDeActive,
  MoviesDeActive,
  SettingsDeActive,
  SendfeedbackDeActive,
  HelpDeActive,
  ReporthistoryDeActive,
} from "./icons";

export const menus = [
  {
    title: "Home",
    lightIconActive: <HomeIconActive fillColor={"#000"} />,
    darkIconActive: <HomeIconActive fillColor={"#fff"} />,
    lightIconDeActive: <HomeIconDeActive fillColor={"#000"} />,
    darkIconDeActive: <HomeIconDeActive fillColor={"#fff"} />,
    url: "/",
    section: "home",
  },
  {
    title: "Shorts",
    lightIconActive: <ShortsIconActive fillColor={"#000"} />,
    darkIconActive: <ShortsIconActive fillColor={"#fff"} />,
    lightIconDeActive: <ShortsIconDeActive fillColor={"#000"} />,
    darkIconDeActive: <ShortsIconDeActive fillColor={"#fff"} />,
    url: "/shorts",
    section: "home",
  },
  {
    title: "Subscriptions",
    lightIconActive: <SubscriptionsActive fillColor={"#000"} />,
    darkIconActive: <SubscriptionsActive fillColor={"#fff"} />,
    lightIconDeActive: <SubscriptionsDeActive fillColor={"#000"} />,
    darkIconDeActive: <SubscriptionsDeActive fillColor={"#fff"} />,
    url: "/feed/subscriptions",
    section: "home",
  },
  {
    title: "Trending",
    lightIconActive: <TrendingDeActive fillColor={"#000"} />,
    darkIconActive: <TrendingDeActive fillColor={"#fff"} />,
    lightIconDeActive: <TrendingDeActive fillColor={"#000"} />,
    darkIconDeActive: <TrendingDeActive fillColor={"#fff"} />,
    url: "/feed/trending",
    section: "explore",
  },
  {
    title: "Shopping",
    lightIconActive: <ShoppingDeActive fillColor={"#000"} />,
    darkIconActive: <ShoppingDeActive fillColor={"#fff"} />,
    lightIconDeActive: <ShoppingDeActive fillColor={"#000"} />,
    darkIconDeActive: <ShoppingDeActive fillColor={"#fff"} />,
    url: "/shopping",
    section: "explore",
  },
  {
    title: "Music",
    lightIconActive: <MusicDeActive fillColor={"#000"} />,
    darkIconActive: <MusicDeActive fillColor={"#fff"} />,
    lightIconDeActive: <MusicDeActive fillColor={"#000"} />,
    darkIconDeActive: <MusicDeActive fillColor={"#fff"} />,
    url: "/music",
    section: "explore",
  },
  {
    title: "Movies",
    lightIconActive: <MoviesDeActive fillColor={"#000"} />,
    darkIconActive: <MoviesDeActive fillColor={"#fff"} />,
    lightIconDeActive: <MoviesDeActive fillColor={"#000"} />,
    darkIconDeActive: <MoviesDeActive fillColor={"#fff"} />,
    url: "/movies",
    section: "explore",
  },
  {
    title: "Live",
    lightIconActive: <LiveDeActive fillColor={"#000"} />,
    darkIconActive: <LiveDeActive fillColor={"#fff"} />,
    lightIconDeActive: <LiveDeActive fillColor={"#000"} />,
    darkIconDeActive: <LiveDeActive fillColor={"#fff"} />,
    url: "/live",
    section: "explore",
  },
  {
    title: "Gaming",
    lightIconActive: <GamingDeActive fillColor={"#000"} />,
    darkIconActive: <GamingDeActive fillColor={"#fff"} />,
    lightIconDeActive: <GamingDeActive fillColor={"#000"} />,
    darkIconDeActive: <GamingDeActive fillColor={"#fff"} />,
    url: "/gaming",
    section: "explore",
  },
  {
    title: "News",
    lightIconActive: <NewsDeActive fillColor={"#000"} />,
    darkIconActive: <NewsDeActive fillColor={"#fff"} />,
    lightIconDeActive: <NewsDeActive fillColor={"#000"} />,
    darkIconDeActive: <NewsDeActive fillColor={"#fff"} />,
    url: "/news",
    section: "explore",
  },
  {
    title: "Sports",
    lightIconActive: <SportsDeActive fillColor={"#000"} />,
    darkIconActive: <SportsDeActive fillColor={"#fff"} />,
    lightIconDeActive: <SportsDeActive fillColor={"#000"} />,
    darkIconDeActive: <SportsDeActive fillColor={"#fff"} />,
    url: "/sports",
    section: "explore",
  },
  {
    title: "Courses",
    lightIconActive: <CoursesDeActive fillColor={"#000"} />,
    darkIconActive: <CoursesDeActive fillColor={"#fff"} />,
    lightIconDeActive: <CoursesDeActive fillColor={"#000"} />,
    darkIconDeActive: <CoursesDeActive fillColor={"#fff"} />,
    url: "/feed/courses_destination",
    section: "explore",
  },
  {
    title: "Fahion & Beauty",
    lightIconActive: <FashionAndBeautyDeActive fillColor={"#000"} />,
    darkIconActive: <FashionAndBeautyDeActive fillColor={"#fff"} />,
    lightIconDeActive: <FashionAndBeautyDeActive fillColor={"#000"} />,
    darkIconDeActive: <FashionAndBeautyDeActive fillColor={"#fff"} />,
    url: "/fashion-beauty",
    section: "explore",
  },
  {
    title: "Podcasts",
    lightIconActive: <PodcastsDeActive fillColor={"#000"} />,
    darkIconActive: <PodcastsDeActive fillColor={"#fff"} />,
    lightIconDeActive: <PodcastsDeActive fillColor={"#000"} />,
    darkIconDeActive: <PodcastsDeActive fillColor={"#fff"} />,
    url: "/podcasts",
    section: "explore",
  },
  {
    title: "Your channel",
    lightIconActive: <YourChannel fillColor={"#000"} />,
    darkIconActive: <YourChannel fillColor={"#fff"} />,
    lightIconDeActive: <YourChannel fillColor={"#000"} />,
    darkIconDeActive: <YourChannel fillColor={"#fff"} />,
    url: "/channel/channel-id",
    section: "you",
  },
  {
    title: "History",
    lightIconActive: <HistoryActive fillColor={"#000"} />,
    darkIconActive: <HistoryActive fillColor={"#fff"} />,
    lightIconDeActive: <HistoryDeActive fillColor={"#000"} />,
    darkIconDeActive: <HistoryDeActive fillColor={"#fff"} />,
    url: "/feed/history",
    section: "you",
  },
  {
    title: "Playlists",
    lightIconActive: <PlaylistActive fillColor={"#000"} />,
    darkIconActive: <PlaylistActive fillColor={"#fff"} />,
    lightIconDeActive: <PlaylistDeActive fillColor={"#000"} />,
    darkIconDeActive: <PlaylistDeActive fillColor={"#fff"} />,
    url: "/feed/playlists",
    section: "you",
  },
  {
    title: "Your Videos",
    lightIconActive: <YourvideosDeActive fillColor={"#000"} />,
    darkIconActive: <YourvideosDeActive fillColor={"#fff"} />,
    lightIconDeActive: <YourvideosDeActive fillColor={"#000"} />,
    darkIconDeActive: <YourvideosDeActive fillColor={"#fff"} />,
    url: "",
    section: "you",
  },
  {
    title: "Watch later",
    lightIconActive: <WatchlaterActive fillColor={"#000"} />,
    darkIconActive: <WatchlaterActive fillColor={"#fff"} />,
    lightIconDeActive: <WatchlaterDeActive fillColor={"#000"} />,
    darkIconDeActive: <WatchlaterDeActive fillColor={"#fff"} />,
    url: "/playlist?list=WL",
    section: "you",
  },
  {
    title: "Liked videos",
    lightIconActive: <LikedvideosActive fillColor={"#000"} />,
    darkIconActive: <LikedvideosActive fillColor={"#fff"} />,
    lightIconDeActive: <LikedvideosDeActive fillColor={"#000"} />,
    darkIconDeActive: <LikedvideosDeActive fillColor={"#fff"} />,
    url: "/playlist?list=LL",
    section: "you",
  },
  {
    title: "Your clips",
    lightIconActive: <YourclipsActive fillColor={"#000"} />,
    darkIconActive: <YourclipsActive fillColor={"#fff"} />,
    lightIconDeActive: <YourclipsDeActive fillColor={"#000"} />,
    darkIconDeActive: <YourclipsDeActive fillColor={"#fff"} />,
    url: "/feed/clips",
    section: "you",
  },
  {
    title: "Settings",
    lightIconActive: <YourclipsActive fillColor={"#000"} />,
    darkIconActive: <YourclipsActive fillColor={"#fff"} />,
    lightIconDeActive: <SettingsDeActive fillColor={"#000"} />,
    darkIconDeActive: <SettingsDeActive fillColor={"#fff"} />,
    url: "/account",
    section: "settings",
  },
  {
    title: "Report history",
    lightIconActive: <YourclipsActive fillColor={"#000"} />,
    darkIconActive: <YourclipsActive fillColor={"#fff"} />,
    lightIconDeActive: <ReporthistoryDeActive fillColor={"#000"} />,
    darkIconDeActive: <ReporthistoryDeActive fillColor={"#fff"} />,
    url: "/reporthistory",
    section: "settings",
  },
  {
    title: "Help",
    lightIconActive: <YourclipsActive fillColor={"#000"} />,
    darkIconActive: <YourclipsActive fillColor={"#fff"} />,
    lightIconDeActive: <HelpDeActive fillColor={"#000"} />,
    darkIconDeActive: <HelpDeActive fillColor={"#fff"} />,
    url: "",
    section: "settings",
  },
  {
    title: "Send feedback",
    lightIconActive: <YourclipsActive fillColor={"#000"} />,
    darkIconActive: <YourclipsActive fillColor={"#fff"} />,
    lightIconDeActive: <SendfeedbackDeActive fillColor={"#000"} />,
    darkIconDeActive: <SendfeedbackDeActive fillColor={"#fff"} />,
    url: "",
    section: "settings",
  },
];
export const categories = [
  "All",
  "Music",
  "News",
  "Drama",
  "Mixes",
  "Javascript",
  "Asha Bhosle",
  "Ishq",
  "T-series",
  "Comedy",
  "Music",
  "News",
  "Drama",
  "Mixes",
  "Javascript",
  "Asha Bhosle",
  "Ishq",
  "T-series",
  "Comedy",
  "Music",
  "News",
  "Drama",
  "Mixes",
  "Javascript",
  "Asha Bhosle",
  "Ishq",
  "T-series",
  "Comedy",
];
