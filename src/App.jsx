import { useState, useEffect } from 'react';
import { HeartIcon, CalendarIcon, MapPinIcon, Music, Gift, ArrowRight, X } from 'lucide-react';
import './App.css';
import { motion } from 'framer-motion';
export default function App() {
  const [loading, setLoading] = useState(true);
  const [showInvitation, setShowInvitation] = useState(false);

  const groomName = "Abhish";
  const brideName = "Gaurika";
  const names = `${groomName} & ${brideName}`;
  const weddingDate = "April 20th, 2025";
  const venue = "Durga Garden, Shajapur";
  const groomParents = "Smt. Smita Bhawsar & Shri. Dr. Abhay Chhaganlal Bhawsar";
  const brideParents = "Smt. Hansa Bhawsar & Shri. Rajesh Bhawsar";
  const grandParents = "Smt. Indu Bhawsar & Late Shri. Dr. Chhaganlal Bhawsar";
  const contactNumber = "9425458374";

  const events = [
    {
      name: "Ganesh Pujan",
      date: "April 18th, 2025",
      time: "04:00 PM",
      venue: "Home (Shajapur)"
    },
    {
      name: "Mata Pujan",
      date: "April 18th, 2025",
      time: "08:00 AM",
      venue: "Home (Shajapur)"
    },
    {
      name: "Haldi Carnival",
      date: "April 19th, 2025",
      time: "11:30 AM",
      venue: "Durga Garden (Shajapur)"
    },
    {
      name: "Sangeet",
      date: "April 19th, 2025",
      time: "07:00 PM Onwards",
      venue: "Durga Garden (Shajapur)"
    },
    {
      name: "Sagai (Engagement)",
      date: "April 20th, 2025",
      time: "10:00 AM",
      venue: "Durga Garden (Shajapur)"
    },
    {
      name: "Baarat",
      date: "April 20th, 2025",
      time: "04:00 PM",
      venue: "Durga Garden (Shajapur)"
    },
    {
      name: "Reception & Dinner",
      date: "April 20th, 2025",
      time: "07:00 PM Onwards",
      venue: "Durga Garden (Shajapur)"
    }
  ];

  const nameVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1.2, ease: 'easeOut' }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const renderHearts = () => {
    const hearts = [];
    for (let i = 0; i < 30; i++) {
      const size = Math.floor(Math.random() * 30) + 10;
      const top = Math.floor(Math.random() * 100);
      const left = Math.floor(Math.random() * 100);
      const delay = Math.floor(Math.random() * 10);
      const duration = Math.floor(Math.random() * 10) + 15;
      const opacity = Math.random() * 0.3 + 0.1;

      hearts.push(
        <div
          key={i}
          className="absolute"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            opacity: opacity,
            color: i % 3 === 0 ? '#FBCFE8' : i % 3 === 1 ? '#FDA4AF' : '#F9A8D4',
            animation: `float ${duration}s ease-in-out ${delay}s infinite alternate`,
            zIndex: 0
          }}
        >
          <HeartIcon
            className="fill-current"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              transform: `rotate(${Math.random() * 30}deg)`
            }}
          />
        </div>
      );
    }
    return hearts;
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-rose-100 to-pink-100">
        <motion.h1
          className="text-5xl md:text-6xl font-dancing bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg"
          initial="hidden"
          animate="visible"
          variants={nameVariants}
        >
          {names}
        </motion.h1>
        <p className="text-xl text-rose-500 mb-8 animate-pulse font-raleway">Loading Our Special Invitation...</p>
        <div className="flex items-center gap-3">
          <HeartIcon className="w-12 h-12 text-rose-400 animate-bounce fill-current" />
          <HeartIcon className="w-8 h-8 text-pink-400 animate-bounce fill-current" style={{ animationDelay: '0.2s' }} />
          <HeartIcon className="w-12 h-12 text-rose-400 animate-bounce fill-current" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 relative overflow-hidden font-raleway">
      <style jsx>{`
        /* Font imports */
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');

        /* Global font classes */
        .font-dancing {
          font-family: 'Dancing Script', cursive;
        }
        .font-great-vibes {
          font-family: 'Great Vibes', cursive;
        }
        .font-raleway {
          font-family: 'Raleway', sans-serif;
        }
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }

        /* Animation keyframes */
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(5px) rotate(-5deg); }
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .heart-beat {
          animation: pulse 2s infinite ease-in-out;
        }
        .heart-bg {
          animation: float 20s infinite ease-in-out alternate;
        }
        .fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .fade-up {
          animation: fadeUp 1s ease-out forwards;
        }
        .shimmer {
          background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%);
          background-size: 200% 100%;
          animation: shimmer 3s infinite linear;
        }
      `}</style>
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ opacity: 0.15 }}
          src="https://res.cloudinary.com/deorjnojb/video/upload/v1744189883/Invitaiton_Final_1_xmmihe.mp4"
        ></video>
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100/50 via-pink-50/50 to-rose-200/50"></div>
      </div>

      {/* Decorative heart elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {renderHearts()}

        <div className="absolute top-0 left-0 -mt-16 -ml-16 opacity-20 heart-bg">
          <HeartIcon className="w-96 h-96 text-pink-200 fill-current" />
        </div>

        <div className="absolute bottom-0 right-0 -mb-16 -mr-16 opacity-30 heart-bg" style={{ animationDelay: '2s' }}>
          <HeartIcon className="w-96 h-96 text-rose-200 fill-current" />
        </div>

        <div className="absolute top-1/4 right-1/4 opacity-20 heart-bg" style={{ animationDelay: '4s' }}>
          <HeartIcon className="w-64 h-64 text-rose-100 fill-current" />
        </div>

        <div className="absolute bottom-1/4 left-1/3 opacity-20 heart-bg" style={{ animationDelay: '6s' }}>
          <HeartIcon className="w-72 h-72 text-pink-100 fill-current" />
        </div>
      </div>

      {/* Main content */}
      <div className="container relative z-10 px-4 py-12 mx-auto sm:px-6 lg:px-8 lg:py-16 flex flex-col min-h-screen justify-center">
        <header className="text-center mb-8">
          <h1
            className="text-5xl md:text-7xl font-great-vibes text-rose-700 fade-in inline-block mx-auto"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
          >
            {names}
          </h1>
          <div
            className="mt-4 fade-up text-xl md:text-2xl italic text-rose-600 font-dancing"
            style={{ animationDelay: '0.3s' }}
          >
            <p>Request the pleasure of your company</p>
            <p>On their special day</p>
          </div>
          <div className="flex items-center justify-center gap-2 mt-4">
            <HeartIcon className="w-5 h-5 text-rose-500 fill-current heart-beat" />
            <HeartIcon className="w-4 h-4 text-pink-400 fill-current heart-beat" style={{ animationDelay: '0.5s' }} />
            <HeartIcon className="w-5 h-5 text-rose-500 fill-current heart-beat" style={{ animationDelay: '1s' }} />
          </div>
        </header>

        <main className="max-w-4xl mx-auto w-full">
          {!showInvitation ? (
            <div
              className="p-8 md:p-10 bg-white bg-opacity-80 backdrop-blur-md rounded-2xl shadow-xl border border-rose-100 fade-up"
              style={{ animationDelay: '0.6s' }}
            >
              <div className="flex flex-col items-center p-4 mb-8 text-center border-b border-rose-100">
                <div className="inline-block p-3 bg-rose-50 rounded-full mb-2 shadow-md">
                  <CalendarIcon className="w-10 h-10 md:w-12 md:h-12 text-rose-600" />
                </div>
                <h2 className="text-3xl md:text-5xl font-playfair text-rose-800 mt-3">{weddingDate}</h2>
                <p className="mt-2 text-lg md:text-xl text-rose-600 font-raleway">Save the Date</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="p-6 md:p-8 mb-8 text-center bg-rose-50 bg-opacity-80 rounded-xl shadow-md w-full">
                  <h3 className="mb-4 text-2xl md:text-3xl font-dancing text-rose-700">Our Wedding Invitation</h3>
                  <p className="mb-6 text-lg text-rose-600 font-raleway">Click below to view our special invitation</p>
                  <div className="flex justify-center w-full">
                    <button
                      onClick={() => setShowInvitation(true)}
                      className="group px-8 py-4 text-white text-lg transition-all duration-300 bg-rose-500 hover:bg-rose-600 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transform hover:scale-105 cursor-pointer font-poppins"
                    >
                      Open Invitation
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 w-full">
                  <div className="p-6 text-center bg-pink-50 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <div className="inline-block p-4 bg-pink-100 rounded-full mb-3 shimmer">
                      <MapPinIcon className="w-6 h-6 text-rose-600" />
                    </div>
                    <h3 className="text-xl font-dancing text-rose-700">Venue Details</h3>
                    <p className="mt-2 text-rose-600 font-raleway">{venue}</p>
                  </div>

                  <div className="p-6 text-center bg-pink-50 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <div className="inline-block p-4 bg-pink-100 rounded-full mb-3 shimmer">
                      <Music className="w-6 h-6 text-rose-600" />
                    </div>
                    <h3 className="text-xl font-dancing text-rose-700">Celebration</h3>
                    <p className="mt-2 text-rose-600 font-raleway">Reception & Dinner</p>
                    <p className="text-rose-600 font-raleway">Music & Dancing</p>
                  </div>

                  <div className="p-6 text-center bg-pink-50 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <div className="inline-block p-4 bg-pink-100 rounded-full mb-3 shimmer">
                      <Gift className="w-6 h-6 text-rose-600" />
                    </div>
                    <h3 className="text-xl font-dancing text-rose-700">RSVP</h3>
                    <p className="mt-2 text-rose-600 font-raleway">Bhawsar Family</p>
                    <p className="text-rose-600 font-raleway">+91 {contactNumber}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="p-8 bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl shadow-xl border border-rose-100 fade-in"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-playfair text-rose-700">Wedding Details</h2>
                <button
                  onClick={() => setShowInvitation(false)}
                  className="p-2 text-rose-500 hover:bg-rose-50 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="w-full mb-8 overflow-hidden rounded-xl shadow-lg bg-black">
                <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
                  <video
                      src="https://res.cloudinary.com/deorjnojb/video/upload/v1744189883/Invitaiton_Final_1_xmmihe.mp4"
                    className="absolute top-0 left-0 w-full h-full border-none"
                    controls
                    autoPlay
                    title="Wedding Invitation"
                  ></video>
                </div>
              </div>

              <div className="mb-8 text-center p-6 bg-rose-50 rounded-xl border border-rose-100">
                <h3 className="text-2xl font-great-vibes text-rose-700 mb-3">Warm Welcome By Bhawsar Family</h3>
                <p className="text-rose-600 mb-1 font-raleway">{grandParents}</p>
                <p className="text-rose-600 mb-4 font-raleway">Request the honour of your gracious presence at the wedding of their Grand Son</p>
                
                <div className="flex flex-col md:flex-row justify-center items-center gap-3 mb-4">
                  <div className="text-3xl font-medium text-rose-700 font-dancing">{groomName}</div>
                  <div className="text-lg text-rose-600 hidden md:block font-poppins">weds</div>
                  <div className="text-3xl font-medium text-rose-700 font-dancing">{brideName}</div>
                </div>
                
                <p className="text-rose-600 font-raleway">S/o {groomParents}</p>
                <p className="text-rose-600 mb-2 font-raleway">D/o {brideParents}</p>
              </div>

              <h3 className="text-2xl font-playfair text-rose-700 mb-4 text-center">Wedding Events</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {events.map((event, index) => (
                  <div key={index} className="p-5 bg-rose-50 rounded-xl fade-up" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                    <h3 className="text-xl font-dancing text-rose-700 mb-2">{event.name}</h3>
                    <div className="flex items-center gap-2 mb-1">
                      <CalendarIcon className="w-4 h-4 text-rose-500" />
                      <p className="text-rose-600 font-raleway">{event.date}</p>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <svg className="w-4 h-4 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <p className="text-rose-600 font-raleway">{event.time}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="w-4 h-4 text-rose-500" />
                      <p className="text-rose-600 font-raleway">{event.venue}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 bg-rose-50 rounded-xl mb-6 text-center">
                <h3 className="text-xl font-dancing text-rose-700 mb-2">RSVP</h3>
                <p className="text-rose-600 font-raleway">Smita Bhawsar - Dr. Abhay Bhawsar</p>
                <p className="text-rose-600 font-raleway">Shajapur (M.P.)</p>
                <p className="text-rose-600 font-raleway">Mob. {contactNumber}</p>
              </div>

              <div className="flex justify-center w-full mt-6">
                <button
                  onClick={() => setShowInvitation(false)}
                  className="px-6 py-3 text-rose-600 border-2 border-rose-300 rounded-full hover:bg-rose-50 transition-colors flex items-center gap-2 font-medium cursor-pointer font-poppins"
                >
                  Return to Main Page
                </button>
              </div>
            </div>
          )}
        </main>

        <footer className="flex flex-col items-center mt-12">
          <div className="flex items-center gap-2">
            <HeartIcon className="w-5 h-5 text-rose-400 fill-current heart-beat" />
            <HeartIcon className="w-4 h-4 text-pink-400 fill-current heart-beat" style={{ animationDelay: '0.7s' }} />
            <HeartIcon className="w-5 h-5 text-rose-400 fill-current heart-beat" style={{ animationDelay: '1.4s' }} />
          </div>
          <p className="mt-3 text-lg text-rose-700 font-medium font-dancing">We look forward to celebrating with you!</p>
        </footer>
      </div>
    </div>
  );
}