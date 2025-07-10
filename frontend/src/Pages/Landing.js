import React from "react";

import "./CSS/Landing.css";


const Landing = () => {
  return (
<div id="webcrumbs"> 
        	<div className="w-[1280px] p-4 bg-gradient-to-b from-slate-100 to-white font-sans">
	  <div className="flex flex-col lg:flex-row gap-5">
	    {/* Left Sidebar */}
	    <a href="#" className="flex items-center p-3 rounded-lg hover:bg-indigo-100 transition-all">
	          <span className="material-symbols-outlined mr-3">chat</span>
	          <span>Messages</span>
	          <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1">4</span>
	        </a>
	<div className="lg:w-1/5 bg-white rounded-xl shadow-md p-4 transition-all hover:shadow-lg">
	      <div className="flex items-center space-x-3 mb-6">
	        <img src="https://placehold.co/100x100/6366f1/FFFFFF?text=GC" alt="Logo" className="h-10 w-10 rounded-full" keywords="glacier chat, logo, social media" />
	        <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">Glacier Chat</h1>
	      </div>
	      
	      <nav className="space-y-3">
	        <a href="#" className="flex items-center p-3 rounded-lg bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition-all">
	          <span className="material-symbols-outlined mr-3">home</span>
	          <span className="font-medium">Home</span>
	        </a>
	        
	        <a href="#" className="flex items-center p-3 rounded-lg hover:bg-indigo-100 transition-all">
	          <span className="material-symbols-outlined mr-3">explore</span>
	          <span>Explore</span>
	        </a>
	        
	        
	        
	        <a href="#" className="flex items-center p-3 rounded-lg hover:bg-indigo-100 transition-all">
	          <span className="material-symbols-outlined mr-3">notifications</span>
	          <span>Notifications</span>
	          <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1">12</span>
	        </a>
	        
	        <a href="#" className="flex items-center p-3 rounded-lg hover:bg-indigo-100 transition-all">
	          <span className="material-symbols-outlined mr-3">videocam</span>
	          <span>Video Calls</span>
	        </a>
	        
	        <a href="#" className="flex items-center p-3 rounded-lg hover:bg-indigo-100 transition-all">
	          <span className="material-symbols-outlined mr-3">settings</span>
	          <span>Settings</span>
	        </a>
	      </nav>
	      
	      <div className="mt-10">
	        <div className="flex flex-col gap-4"><div className="p-4 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-lg text-white shadow-lg">
	          <h3 className="font-bold text-lg mb-2">Upgrade to Pro</h3>
	          <p className="text-sm opacity-90 mb-3">Get additional features and premium support</p>
	          <button className="bg-white text-indigo-600 w-full py-2 rounded-md font-medium hover:bg-indigo-50 transition-all">Upgrade Now</button>
	        </div>
	<div className="bg-white rounded-xl p-4 shadow-md">
	        <h2 className="font-bold text-lg mb-3">Stories</h2>
	        <div className="flex space-x-4 overflow-x-auto py-2">
	          <div className="flex flex-col items-center">
	            <div className="relative">
	              <div className="w-16 h-16 rounded-full border-2 border-dashed border-indigo-500 flex items-center justify-center bg-indigo-50">
	                <span className="material-symbols-outlined text-indigo-500">add</span>
	              </div>
	            </div>
	            <span className="text-xs mt-1">Add Story</span>
	          </div>
	          
	          {[1, 2, 3, 4, 5, 6].map((item) => (
	            <div key={item} className="flex flex-col items-center">
	              <div className="relative cursor-pointer transform hover:scale-105 transition-all">
	                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 p-0.5">
	                  <img 
	                    src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item + 10}.jpg`}
	                    alt="User story" 
	                    className="w-full h-full object-cover rounded-full border-2 border-white"
	                    keywords="social media, user, profile picture, story"
	                  />
	                </div>
	                <div className="absolute -bottom-1 -right-1 bg-indigo-600 text-white rounded-full p-0.5 border-2 border-white">
	                  <span className="material-symbols-outlined text-sm">play_arrow</span>
	                </div>
	              </div>
	              <span className="text-xs mt-1">User {item}</span>
	            </div>
	          ))}
	        </div>
	      </div></div>
	      </div>
	      {/* Next: "Add user profile quick access card" */}
	    </div>
	    
	    {/* Main Content */}
	    <div className="lg:w-3/5 space-y-5">
	      {/* Stories */}
	      
	      
	      {/* Create Post */}
	      <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all">
	        <div className="flex items-center space-x-3 mb-4">
	          <img 
	            src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYXxlbnwwfHx8fDE3NDU4MzU2Njl8MA&ixlib=rb-4.0.3&q=80&w=1080" 
	            alt="User profile" 
	            className="w-10 h-10 rounded-full"
	            keywords="social media, user, profile picture"
	          />
	          <div className="flex flex-col gap-4"><input 
	            type="text" 
	            placeholder="What's on your mind, Emma?" 
	            className="bg-gray-100 rounded-full px-4 py-2 flex-1 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
	          />
	<div className="flex items-center justify-between mb-3">
	              <div className="flex items-center space-x-3">
	                <img 
	                  src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwyfHxzb2NpYWwlMjBtZWRpYXxlbnwwfHx8fDE3NDU4MzU2Njl8MA&ixlib=rb-4.0.3&q=80&w=1080" 
	                  alt="User profile" 
	                  className="w-10 h-10 rounded-full border-2 border-indigo-100"
	                  keywords="social media, user, profile picture"
	                />
	                <div>
	                  <h3 className="font-semibold">Samantha Davis</h3>
	                  <p className="text-xs text-gray-500">2 hours ago · Public</p>
	                </div>
	              </div>
	              
	              <details className="relative">
	                <summary className="list-none cursor-pointer p-2 hover:bg-gray-100 rounded-full">
	                  <span className="material-symbols-outlined">more_horiz</span>
	                </summary>
	                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg p-2 z-10">
	                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md">Save post</a>
	                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md">Hide post</a>
	                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md text-red-500">Report post</a>
	                </div>
	              </details>
	            </div></div>
	        </div>
	        
	        <div className="flex border-t border-gray-200 pt-3">
	          <button className="flex items-center justify-center space-x-2 flex-1 text-sm p-2 hover:bg-gray-100 rounded-lg transition-all">
	            <span className="material-symbols-outlined text-red-500">image</span>
	            <span>Photo</span>
	          </button>
	          
	          <button className="flex items-center justify-center space-x-2 flex-1 text-sm p-2 hover:bg-gray-100 rounded-lg transition-all">
	            <span className="material-symbols-outlined text-blue-500">videocam</span>
	            <span>Video</span>
	          </button>
	          
	          <button className="flex items-center justify-center space-x-2 flex-1 text-sm p-2 hover:bg-gray-100 rounded-lg transition-all">
	            <span className="material-symbols-outlined text-green-500">sentiment_satisfied</span>
	            <span>Feeling</span>
	          </button>
	        </div>
	      </div>
	      
	      {/* Posts */}
	      <div className="space-y-5">
	        {/* Post 1 */}
	        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
	          <div className="p-4">
	            
	            
	            <p className="mb-3">Just finished my final exams! Finally free for the summer! 🎉 #CollegeLife #SummerVibes</p>
	            
	            <div className="rounded-xl overflow-hidden mb-3">
	              <img 
	                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxjb2xsZWdlfGVufDB8fHx8MTc0NTgzNTcwNnww&ixlib=rb-4.0.3&q=80&w=1080" 
	                alt="Post image" 
	                className="w-full h-auto"
	                keywords="college, graduation, celebration, party, summer, student life"
	              />
	            </div>
	            
	            <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
	              <div className="flex items-center space-x-1">
	                <div className="flex -space-x-1">
	                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500 text-white text-xs">
	                    <i className="fa-solid fa-thumbs-up"></i>
	                  </span>
	                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-red-500 text-white text-xs">
	                    <i className="fa-solid fa-heart"></i>
	                  </span>
	                </div>
	                <span>248 likes</span>
	              </div>
	              
	              <div className="flex space-x-2">
	                <span>32 comments</span>
	                <span>8 shares</span>
	              </div>
	            </div>
	            
	            <div className="flex border-t border-b border-gray-200 py-1">
	              <button className="flex items-center justify-center space-x-2 flex-1 p-2 hover:bg-gray-100 rounded-lg transition-all">
	                <span className="material-symbols-outlined">thumb_up</span>
	                <span>Like</span>
	              </button>
	              
	              <button className="flex items-center justify-center space-x-2 flex-1 p-2 hover:bg-gray-100 rounded-lg transition-all">
	                <span className="material-symbols-outlined">chat_bubble_outline</span>
	                <span>Comment</span>
	              </button>
	              
	              <button className="flex items-center justify-center space-x-2 flex-1 p-2 hover:bg-gray-100 rounded-lg transition-all">
	                <span className="material-symbols-outlined">share</span>
	                <span>Share</span>
	              </button>
	            </div>
	            
	            <div className="mt-3">
	              <div className="flex space-x-2">
	                <img 
	                  src="https://images.unsplash.com/photo-1579869847557-1f67382cc158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwzfHxzb2NpYWwlMjBtZWRpYXxlbnwwfHx8fDE3NDU4MzU2Njl8MA&ixlib=rb-4.0.3&q=80&w=1080" 
	                  alt="User profile" 
	                  className="w-8 h-8 rounded-full"
	                  keywords="social media, user, profile picture, comment"
	                />
	                <div className="flex-1">
	                  <input 
	                    type="text" 
	                    placeholder="Write a comment..." 
	                    className="bg-gray-100 rounded-full px-4 py-2 w-full text-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
	                  />
	                </div>
	              </div>
	            </div>
	          </div>
	        </div>
	        
	        {/* Post 2 */}
	        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
	          <div className="p-4">
	            <div className="flex items-center justify-between mb-3">
	              <div className="flex items-center space-x-3">
	                <img 
	                  src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHw0fHxzb2NpYWwlMjBtZWRpYXxlbnwwfHx8fDE3NDU4MzU2Njl8MA&ixlib=rb-4.0.3&q=80&w=1080" 
	                  alt="User profile" 
	                  className="w-10 h-10 rounded-full border-2 border-indigo-100"
	                  keywords="social media, user, profile picture"
	                />
	                <div>
	                  <h3 className="font-semibold">Mike Johnson</h3>
	                  <p className="text-xs text-gray-500">4 hours ago · Public</p>
	                </div>
	              </div>
	              
	              <details className="relative">
	                <summary className="list-none cursor-pointer p-2 hover:bg-gray-100 rounded-full">
	                  <span className="material-symbols-outlined">more_horiz</span>
	                </summary>
	                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg p-2 z-10">
	                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md">Save post</a>
	                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md">Hide post</a>
	                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md text-red-500">Report post</a>
	                </div>
	              </details>
	            </div>
	            
	            <p className="mb-3">Trying out this new coding setup. What do you think? #DevLife #CodingSetup</p>
	            
	            <div className="rounded-xl overflow-hidden mb-3">
	              <img 
	                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
	                alt="Coding setup" 
	                className="w-full h-auto"
	                keywords="coding, developer, computer, laptop, tech, setup, workspace"
	              />
	            </div>
	            
	            <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
	              <div className="flex items-center space-x-1">
	                <div className="flex -space-x-1">
	                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500 text-white text-xs">
	                    <i className="fa-solid fa-thumbs-up"></i>
	                  </span>
	                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-red-500 text-white text-xs">
	                    <i className="fa-solid fa-heart"></i>
	                  </span>
	                </div>
	                <span>156 likes</span>
	              </div>
	              
	              <div className="flex space-x-2">
	                <span>45 comments</span>
	                <span>12 shares</span>
	              </div>
	            </div>
	            
	            <div className="flex border-t border-b border-gray-200 py-1">
	              <button className="flex items-center justify-center space-x-2 flex-1 p-2 hover:bg-gray-100 rounded-lg transition-all">
	                <span className="material-symbols-outlined">thumb_up</span>
	                <span>Like</span>
	              </button>
	              
	              <button className="flex items-center justify-center space-x-2 flex-1 p-2 hover:bg-gray-100 rounded-lg transition-all">
	                <span className="material-symbols-outlined">chat_bubble_outline</span>
	                <span>Comment</span>
	              </button>
	              
	              <button className="flex items-center justify-center space-x-2 flex-1 p-2 hover:bg-gray-100 rounded-lg transition-all">
	                <span className="material-symbols-outlined">share</span>
	                <span>Share</span>
	              </button>
	            </div>
	            
	            <div className="mt-3">
	              <div className="flex space-x-2">
	                <img 
	                  src="https://images.unsplash.com/photo-1573152143286-0c422b4d2175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHw1fHxzb2NpYWwlMjBtZWRpYXxlbnwwfHx8fDE3NDU4MzU2Njl8MA&ixlib=rb-4.0.3&q=80&w=1080" 
	                  alt="User profile" 
	                  className="w-8 h-8 rounded-full"
	                  keywords="social media, user, profile picture, comment"
	                />
	                <div className="flex-1">
	                  <input 
	                    type="text" 
	                    placeholder="Write a comment..." 
	                    className="bg-gray-100 rounded-full px-4 py-2 w-full text-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
	                  />
	                </div>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
	      {/* Next: "Add infinite scroll pagination for more posts" */}
	    </div>
	    
	    {/* Right Sidebar */}
	    <div className="lg:w-1/5 space-y-5">
	      {/* User Profile */}
	      <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-all">
	        <div className="flex flex-col items-center">
	          <div className="relative mb-3">
	            <img 
	              src="https://images.unsplash.com/photo-1554177255-61502b352de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHw2fHxzb2NpYWwlMjBtZWRpYXxlbnwwfHx8fDE3NDU4MzU2Njl8MA&ixlib=rb-4.0.3&q=80&w=1080" 
	              alt="User profile" 
	              className="w-20 h-20 rounded-full border-4 border-indigo-100"
	              keywords="social media, user, profile picture"
	            />
	            <div className="absolute bottom-0 right-0 bg-green-500 p-1 rounded-full border-2 border-white"></div>
	          </div>
	          
	          <h2 className="font-bold text-lg">Emma Wilson</h2>
	          <p className="text-sm text-gray-500 mb-2">@emma.wilson</p>
	          
	          <p className="text-sm text-center mb-3">Digital artist & photography enthusiast. Studying design at NYU.</p>
	          
	          <div className="flex justify-around w-full border-t border-b border-gray-200 py-3 mb-3">
	            <div className="text-center">
	              <div className="font-bold">267</div>
	              <div className="text-xs text-gray-500">Posts</div>
	            </div>
	            
	            <div className="text-center">
	              <div className="font-bold">1.5K</div>
	              <div className="text-xs text-gray-500">Followers</div>
	            </div>
	            
	            <div className="text-center">
	              <div className="font-bold">520</div>
	              <div className="text-xs text-gray-500">Following</div>
	            </div>
	          </div>
	          
	          <button className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition-all">
	            Edit Profile
	          </button>
	        </div>
	      </div>
	      
	      {/* Contacts / Active Friends */}
	      <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-all">
	        <div className="flex justify-between items-center mb-4">
	          <h2 className="font-bold">Contacts</h2>
	          
	          <div className="flex space-x-2">
	            <button className="p-1 hover:bg-gray-100 rounded-full transition-all">
	              <span className="material-symbols-outlined text-sm">search</span>
	            </button>
	            
	            <button className="p-1 hover:bg-gray-100 rounded-full transition-all">
	              <span className="material-symbols-outlined text-sm">more_horiz</span>
	            </button>
	          </div>
	        </div>
	        
	        <div className="space-y-3">
	          {[
	            { name: "Alex Johnson", img: "https://randomuser.me/api/portraits/men/32.jpg", active: true },
	            { name: "Sarah Parker", img: "https://images.unsplash.com/photo-1555663173-830f65a7329a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHw3fHxzb2NpYWwlMjBtZWRpYXxlbnwwfHx8fDE3NDU4MzU2Njl8MA&ixlib=rb-4.0.3&q=80&w=1080", active: true },
	            { name: "David Kim", img: "https://randomuser.me/api/portraits/men/44.jpg", active: false },
	            { name: "Lisa Wang", img: "https://randomuser.me/api/portraits/women/51.jpg", active: true },
	            { name: "Michael Brown", img: "https://randomuser.me/api/portraits/men/22.jpg", active: false }
	          ].map((contact, index) => (
	            <div key={index} className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-all">
	              <div className="relative">
	                <img 
	                  src={contact.img} 
	                  alt={`${contact.name} profile`} 
	                  className="w-10 h-10 rounded-full"
	                  keywords="social media, user, profile picture, contact"
	                />
	                {contact.active && (
	                  <div className="absolute bottom-0 right-0 bg-green-500 p-1 rounded-full border-2 border-white"></div>
	                )}
	              </div>
	              <span>{contact.name}</span>
	            </div>
	          ))}
	        </div>
	        
	        <button className="w-full mt-3 text-indigo-600 py-2 rounded-lg font-medium border border-indigo-600 hover:bg-indigo-50 transition-all">
	          See All Contacts
	        </button>
	      </div>
	      
	      {/* Suggested Users */}
	      <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-all">
	        <h2 className="font-bold mb-4">Suggested Users</h2>
	        
	        <div className="space-y-4">
	          {[
	            { name: "Jordan Lee", img: "https://randomuser.me/api/portraits/women/23.jpg", bio: "Travel blogger & photographer" },
	            { name: "Ryan Choi", img: "https://randomuser.me/api/portraits/men/76.jpg", bio: "Software engineer at Google" },
	            { name: "Emily Zhang", img: "https://randomuser.me/api/portraits/women/15.jpg", bio: "Art student at RISD" }
	          ].map((user, index) => (
	            <div key={index} className="flex items-start space-x-3">
	              <img 
	                src={user.img} 
	                alt={`${user.name} profile`} 
	                className="w-10 h-10 rounded-full"
	                keywords="social media, user, profile picture, suggestion"
	              />
	              
	              <div className="flex-1">
	                <h3 className="font-semibold text-sm">{user.name}</h3>
	                <p className="text-xs text-gray-500">{user.bio}</p>
	              </div>
	              
	              <button className="text-indigo-600 text-sm font-medium hover:text-indigo-800 transition-all">
	                Follow
	              </button>
	            </div>
	          ))}
	        </div>
	      </div>
	      {/* Next: "Add trending topics widget" */}
	    </div>
	  </div>
	  
	  {/* Video Call Modal (as an example of the feature) */}
	  <div className="absolute right-5 bottom-5 w-72 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
	    <div className="bg-indigo-600 text-white p-3 flex justify-between items-center">
	      <div className="flex items-center space-x-2">
	        <img 
	          src="https://images.unsplash.com/photo-1535303311164-664fc9ec6532?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHw4fHxzb2NpYWwlMjBtZWRpYXxlbnwwfHx8fDE3NDU4MzU2Njl8MA&ixlib=rb-4.0.3&q=80&w=1080" 
	          alt="Contact profile" 
	          className="w-8 h-8 rounded-full border-2 border-white"
	          keywords="social media, user, profile picture, video call"
	        />
	        <span className="font-medium">Sarah Parker</span>
	      </div>
	      
	      <div className="flex space-x-2">
	        <button className="p-1 hover:bg-indigo-700 rounded-full transition-all">
	          <span className="material-symbols-outlined text-sm">minimize</span>
	        </button>
	        
	        <button className="p-1 hover:bg-indigo-700 rounded-full transition-all">
	          <span className="material-symbols-outlined text-sm">close</span>
	        </button>
	      </div>
	    </div>
	    
	    <div className="relative h-[200px] bg-gray-900">
	      <img 
	        src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYXxlbnwwfHx8fDE3NDU4MzU2Njl8MA&ixlib=rb-4.0.3&q=80&w=1080" 
	        alt="Video call" 
	        className="w-full h-full object-cover opacity-60"
	        keywords="social media, video call, communication"
	      />
	      
	      <div className="absolute bottom-3 right-3 w-16 h-24 rounded-lg overflow-hidden border-2 border-white">
	        <img 
	          src="https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHw5fHxzb2NpYWwlMjBtZWRpYXxlbnwwfHx8fDE3NDU4MzU2Njl8MA&ixlib=rb-4.0.3&q=80&w=1080" 
	          alt="Self view" 
	          className="w-full h-full object-cover"
	          keywords="social media, video call, self view"
	        />
	      </div>
	      
	      <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-3">
	        <button className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all">
	          <span className="material-symbols-outlined">call_end</span>
	        </button>
	        
	        <button className="p-2 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition-all">
	          <span className="material-symbols-outlined">mic</span>
	        </button>
	        
	        <button className="p-2 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition-all">
	          <span className="material-symbols-outlined">videocam</span>
	        </button>
	      </div>
	    </div>
	  </div>
	  {/* Next: "Add real-time messaging and notification components" */}
	</div> 
        </div>
  )
}

export default Landing