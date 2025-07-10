import React from "react";

import "./CSS/profile.css";


const Profile = () => {
  return (
<div id="webcrumbs"> 
        	<div className="w-full min-h-screen bg-white shadow-xl overflow-hidden">
	  <div className="relative h-64 bg-gradient-to-r from-primary-500 to-primary-600">
	    <div className="absolute inset-0 bg-black bg-opacity-10"></div>
	    <div className="absolute top-4 right-4 flex space-x-2">
	      <button className="w-8 h-8 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-200">
	        <span className="material-symbols-outlined text-white text-sm">share</span>
	      </button>
	      <button className="w-8 h-8 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-200">
	        <span className="material-symbols-outlined text-white text-sm">more_vert</span>
	      </button>
	    </div>
	    <div className="absolute -bottom-12 left-8">
	      <div className="relative">
	        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwwfHx8fDE3NTIwNTM3NzV8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Profile" className="w-32 h-32 rounded-full border-4 border-white shadow-lg" keywords="professional woman, portrait, headshot" />
	        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
	          <div className="w-2 h-2 bg-white rounded-full"></div>
	        </div>
	      </div>
	    </div>
	  </div>
	  
	  <div className="pt-20 pb-10 px-8 max-w-6xl mx-auto">
	    <div className="flex items-center justify-between mb-4">
	      <h2 className="text-3xl font-bold text-gray-900">Sarah Johnson</h2>
	      <div className="flex items-center space-x-1">
	        <span className="material-symbols-outlined text-yellow-500 text-sm">verified</span>
	        <span className="text-xs text-gray-500">Verified</span>
	      </div>
	    </div>
	    
	    <p className="text-lg text-gray-600 mb-2">Senior Product Designer</p>
	    <p className="text-md text-gray-500 mb-6">San Francisco, CA</p>
	    
	    <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-4 mb-8 max-w-3xl">
	      <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
	        <div className="text-xl font-bold text-gray-900">1.2k</div>
	        <div className="text-xs text-gray-500">Following</div>
	      </div>
	      <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
	        <div className="text-xl font-bold text-gray-900">3.4k</div>
	        <div className="text-xs text-gray-500">Followers</div>
	      </div>
	      <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
	        <div className="text-xl font-bold text-gray-900">89</div>
	        <div className="text-xs text-gray-500">Posts</div>
	      </div>
	    </div>
	    
	    <div className="flex items-center space-x-3 mb-8">
	      <div className="flex -space-x-3">
	        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" alt="Friend" className="w-10 h-10 rounded-full border-2 border-white" keywords="man, professional, headshot" />
	        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face" alt="Friend" className="w-10 h-10 rounded-full border-2 border-white" keywords="woman, professional, headshot" />
	        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face" alt="Friend" className="w-10 h-10 rounded-full border-2 border-white" keywords="man, professional, headshot" />
	        <div className="w-10 h-10 bg-gray-200 rounded-full border-2 border-white flex items-center justify-center hover:bg-gray-300 transition-colors duration-200">
	          <span className="text-xs text-gray-600">+5</span>
	        </div>
	      </div>
	      <span className="text-sm text-gray-500">12 mutual friends</span>
	    </div>
	    
	    <div className="flex space-x-4 mb-10 max-w-md">
	      <button className="flex-1 bg-primary-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-600 transition-colors duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg">
	        <span className="material-symbols-outlined text-sm">person_add</span>
	        <span>Follow</span>
	      </button>
	      <button className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg">
	        <span className="material-symbols-outlined text-sm">chat</span>
	        <span>Message</span>
	      </button>
	    </div>
	    
	    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
	      <div className="border-t pt-6">
	        <div className="flex items-center justify-between mb-4">
	          <span className="text-base font-medium text-gray-700">Skills</span>
	          <span className="text-xs text-gray-500 hover:underline cursor-pointer">View all</span>
	        </div>
	        <div className="flex flex-wrap gap-2">
	          <span className="px-4 py-2 bg-primary-50 text-primary-700 text-sm rounded-full hover:bg-primary-100 transition-colors duration-200">UI/UX Design</span>
	          <span className="px-4 py-2 bg-primary-50 text-primary-700 text-sm rounded-full hover:bg-primary-100 transition-colors duration-200">Figma</span>
	          <span className="px-4 py-2 bg-primary-50 text-primary-700 text-sm rounded-full hover:bg-primary-100 transition-colors duration-200">Prototyping</span>
	          <span className="px-4 py-2 bg-primary-50 text-primary-700 text-sm rounded-full hover:bg-primary-100 transition-colors duration-200">+3 more</span>
	        </div>
	      </div>
	      
	      <div className="border-t pt-6">
	        <div className="flex items-center justify-between mb-4">
	          <span className="text-base font-medium text-gray-700">Recent Activity</span>
	          <span className="material-symbols-outlined text-gray-400 text-sm cursor-pointer hover:text-gray-600">keyboard_arrow_right</span>
	        </div>
	        <div className="space-y-3">
	          <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200">
	            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
	            <span className="text-sm text-gray-600">Posted a new design</span>
	            <span className="text-xs text-gray-400 ml-auto">2h ago</span>
	          </div>
	          <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200">
	            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
	            <span className="text-sm text-gray-600">Joined Design Team</span>
	            <span className="text-xs text-gray-400 ml-auto">1d ago</span>
	          </div>
	        </div>
	      </div>
	    </div>
	    
	    <div className="mt-10 border-t pt-6">
	      <h3 className="text-xl font-bold mb-4">Portfolio Highlights</h3>
	      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
	        <div className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-md transition-all duration-200 hover:translate-y-[-2px]">
	          <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80" alt="Project" className="w-full h-40 object-cover" keywords="app design, mobile ui, prototype" />
	          <div className="p-4">
	            <h4 className="font-bold">Mobile Banking App</h4>
	            <p className="text-sm text-gray-600 mt-1">Complete redesign of banking interface</p>
	          </div>
	        </div>
	        <div className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-md transition-all duration-200 hover:translate-y-[-2px]">
	          <img src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80" alt="Project" className="w-full h-40 object-cover" keywords="website design, dashboard, ui" />
	          <div className="p-4">
	            <h4 className="font-bold">Analytics Dashboard</h4>
	            <p className="text-sm text-gray-600 mt-1">Data visualization platform</p>
	          </div>
	        </div>
	        <div className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-md transition-all duration-200 hover:translate-y-[-2px]">
	          <img src="https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80" alt="Project" className="w-full h-40 object-cover" keywords="brand design, logo, marketing" />
	          <div className="p-4">
	            <h4 className="font-bold">Brand Identity</h4>
	            <p className="text-sm text-gray-600 mt-1">Logo and identity system for tech startup</p>
	          </div>
	        </div>
	      </div>
	    </div>
	  </div>
	</div> 
        </div>
  )
}

export default Profile