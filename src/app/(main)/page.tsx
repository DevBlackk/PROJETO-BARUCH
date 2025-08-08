import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Calendar, Music, Megaphone, CalendarDays } from 'lucide-react';

const announcements = [
  {
    title: 'New Concert Date!',
    content: 'Our next concert has been scheduled for December 15th. Mark your calendars!',
    image: 'https://placehold.co/600x400.png',
    hint: 'concert music',
  },
  {
    title: 'Auditions Open',
    content: 'Auditions for the spring season are now open. Sign up sheet is in the main hall.',
    image: 'https://placehold.co/600x400.png',
    hint: 'audition stage',
  },
  {
    title: 'Fundraiser Success',
    content: 'Thank you to everyone who participated in our recent fundraiser. We exceeded our goal!',
    image: 'https://placehold.co/600x400.png',
    hint: 'community charity',
  },
];

const agenda = [
  { time: '10:00 AM', title: 'Sectional Rehearsal: Strings' },
  { time: '11:30 AM', title: 'Music Theory Class' },
  { time: '01:00 PM', title: 'Lunch Break' },
  { time: '02:30 PM', title: 'Full Orchestra Practice' },
  { time: '05:00 PM', title: 'Meeting with Conductors' },
];

const events = [
    { date: 'Nov 12', title: 'Chamber Music Night', location: 'Small Auditorium' },
    { date: 'Nov 25', title: 'Guest Conductor Masterclass', location: 'Main Hall' },
    { date: 'Dec 05', title: 'Holiday Pops Concert', location: 'City Theater' },
    { date: 'Dec 15', title: 'Winter Gala Concert', location: 'Grand Concert Hall' },
];


export default function DashboardPage() {
  return (
    <main className="flex-1 p-4 md:p-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="lg:col-span-2 xl:col-span-2">
           <Card className="h-full transition-transform hover:scale-[1.02] duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline">
                <Megaphone className="text-primary" />
                Announcements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Carousel
                className="w-full"
                opts={{
                  loop: true,
                }}
              >
                <CarouselContent>
                  {announcements.map((item, index) => (
                    <CarouselItem key={index}>
                      <div className="relative h-64 w-full">
                        <Image
                          src={item.image}
                          alt={item.title}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                          data-ai-hint={item.hint}
                        />
                        <div className="absolute inset-0 bg-black/50 rounded-lg flex flex-col justify-end p-4">
                          <h3 className="text-lg font-bold text-white">{item.title}</h3>
                          <p className="text-sm text-white/90">{item.content}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
              </Carousel>
            </CardContent>
          </Card>
        </div>

        <Card className="transition-transform hover:scale-[1.02] duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline">
                <Music className="text-primary" />
                Next Rehearsal
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="font-semibold text-lg">Symphony No. 5 - Beethoven</p>
              <p className="text-muted-foreground">Full Orchestra</p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary">Date</Badge>
              <p>Tomorrow, 7:00 PM</p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary">Location</Badge>
              <p>Main Rehearsal Hall</p>
            </div>
             <div className="flex items-center gap-4">
              <Badge variant="secondary">Focus</Badge>
              <p>Movements I & II</p>
            </div>
          </CardContent>
        </Card>

        <Card className="transition-transform hover:scale-[1.02] duration-300">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline">
                    <Calendar className="text-primary" />
                    Today's Agenda
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-4">
                    {agenda.map((item) => (
                        <li key={item.title} className="flex items-start gap-4">
                            <span className="font-semibold text-primary w-24">{item.time}</span>
                            <p>{item.title}</p>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>

        <Card className="lg:col-span-2 xl:col-span-4 transition-transform hover:scale-[1.02] duration-300">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline">
                    <CalendarDays className="text-primary"/>
                    Upcoming Events
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {events.map((event) => (
                        <div key={event.title} className="p-4 bg-secondary rounded-lg">
                           <p className="text-sm font-bold text-primary">{event.date}</p>
                           <p className="font-semibold">{event.title}</p>
                           <p className="text-sm text-muted-foreground">{event.location}</p>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
      </div>
    </main>
  );
}
