interface ListElementProps {
  showhideElement: (value: number) => void;
  imageSrc: string;
  title: string;
  arrow: string;
  Topic?: string;
  represent? : string;
}

interface RepresentProps {
  val: number;
}

interface CarouselIndicatorsProps {
  numberOfSlides: number;
}

interface CarouselRepresentProps  {
  carouselItems: number;
  images: string[];
  titles: string[];
  components: React.ReactNode[];
};
