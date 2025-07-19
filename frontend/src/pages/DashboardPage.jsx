// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";
// import { 
//   User, 
//   LogOut, 
//   Calendar, 
//   Shield, 
//   Activity, 
//   Settings, 
//   Bell, 
//   Star,
//   Trophy,
//   Clock,
//   Mail,
//   MapPin,
//   Sparkles,
//   TrendingUp,
//   Award,
//   Zap
// } from "lucide-react";
// import { useAuthStore } from "../store/authStore";
// import { formatDate } from "../utils/date";

// const DashboardPage = () => {
//   const { user, logout } = useAuthStore();
//   const [activeTab, setActiveTab] = useState('overview');
//   const [stats, setStats] = useState({
//     totalSessions: 127,
//     hoursSpent: 89,
//     achievements: 12,
//     streak: 15
//   });

//   const handleLogout = () => {
//     logout();
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 12
//       }
//     }
//   };

//   const floatingVariants = {
//     animate: {
//       y: [-5, 5, -5],
//       transition: {
//         duration: 3,
//         repeat: Infinity,
//         ease: "easeInOut"
//       }
//     }
//   };

//   const glowVariants = {
//     animate: {
//       boxShadow: [
//         "0 0 20px rgba(16, 185, 129, 0.3)",
//         "0 0 40px rgba(16, 185, 129, 0.5)",
//         "0 0 20px rgba(16, 185, 129, 0.3)"
//       ],
//       transition: {
//         duration: 2,
//         repeat: Infinity,
//         ease: "easeInOut"
//       }
//     }
//   };

//   const tabs = [
//     { id: 'overview', label: 'Overview', icon: Activity },
//     { id: 'profile', label: 'Profile', icon: User },
//     { id: 'settings', label: 'Settings', icon: Settings }
//   ];

//   const achievements = [
//     { icon: Trophy, title: "First Login", description: "Welcome aboard!", color: "text-yellow-400" },
//     { icon: Star, title: "Verified Email", description: "Account verified", color: "text-blue-400" },
//     { icon: Zap, title: "Premium User", description: "Upgraded account", color: "text-purple-400" },
//     { icon: Award, title: "Early Adopter", description: "Joined the community", color: "text-green-400" }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div
//           className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
//           animate={{
//             scale: [1, 1.2, 1],
//             rotate: [0, 90, 0],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "linear"
//           }}
//         />
//         <motion.div
//           className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
//           animate={{
//             scale: [1.2, 1, 1.2],
//             rotate: [90, 0, 90],
//           }}
//           transition={{
//             duration: 25,
//             repeat: Infinity,
//             ease: "linear"
//           }}
//         />
        
//         {/* Floating Particles */}
//         {[...Array(6)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               y: [-20, 20, -20],
//               x: [-10, 10, -10],
//               opacity: [0.3, 0.8, 0.3],
//             }}
//             transition={{
//               duration: 3 + Math.random() * 2,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: Math.random() * 2,
//             }}
//           />
//         ))}
//       </div>

//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="relative z-10 max-w-6xl mx-auto px-4 py-8"
//       >
//         {/* Header */}
//         <motion.div
//           variants={itemVariants}
//           className="flex items-center justify-between mb-12"
//         >
//           <div className="flex items-center space-x-4">
//             <motion.div
//               variants={floatingVariants}
//               animate="animate"
//               className="relative"
//             >
//               <img
//                 src={user?.avatar || "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"}
//                 alt="Profile"
//                 className="w-16 h-16 rounded-full border-4 border-gradient-to-r from-emerald-400 to-cyan-400 object-cover"
//               />
//               <motion.div
//                 className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center"
//                 variants={glowVariants}
//                 animate="animate"
//               >
//                 <Shield className="w-3 h-3 text-white" />
//               </motion.div>
//             </motion.div>
            
//             <div>
//               <motion.h1
//                 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 text-transparent bg-clip-text"
//                 animate={{
//                   backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//                 }}
//                 transition={{
//                   duration: 5,
//                   repeat: Infinity,
//                   ease: "linear"
//                 }}
//               >
//                 Welcome back, {user?.name?.split(' ')[0]}!
//               </motion.h1>
//               <p className="text-slate-400 text-lg">Ready to achieve your goals today?</p>
//             </div>
//           </div>

//           <motion.button
//             whileHover={{ scale: 1.05, rotate: 5 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={handleLogout}
//             className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-xl shadow-lg hover:shadow-red-500/25 transition-all duration-300"
//           >
//             <LogOut className="w-5 h-5" />
//             <span className="font-semibold">Logout</span>
//           </motion.button>
//         </motion.div>

//         {/* Navigation Tabs */}
//         <motion.div
//           variants={itemVariants}
//           className="flex space-x-2 mb-8 bg-slate-800/50 backdrop-blur-lg rounded-2xl p-2 border border-slate-700/50"
//         >
//           {tabs.map((tab) => {
//             const Icon = tab.icon;
//             return (
//               <motion.button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
//                   activeTab === tab.id
//                     ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg'
//                     : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
//                 }`}
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <Icon className="w-5 h-5" />
//                 <span className="font-medium">{tab.label}</span>
//               </motion.button>
//             );
//           })}
//         </motion.div>

//         <AnimatePresence mode="wait">
//           {activeTab === 'overview' && (
//             <motion.div
//               key="overview"
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -20 }}
//               transition={{ duration: 0.3 }}
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//             >
//               {/* Stats Cards */}
//               <motion.div
//                 variants={itemVariants}
//                 className="col-span-full grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"
//               >
//                 {[
//                   { label: 'Total Sessions', value: stats.totalSessions, icon: Activity, color: 'from-blue-500 to-cyan-500' },
//                   { label: 'Hours Spent', value: stats.hoursSpent, icon: Clock, color: 'from-purple-500 to-pink-500' },
//                   { label: 'Achievements', value: stats.achievements, icon: Trophy, color: 'from-yellow-500 to-orange-500' },
//                   { label: 'Day Streak', value: stats.streak, icon: TrendingUp, color: 'from-green-500 to-emerald-500' }
//                 ].map((stat, index) => {
//                   const Icon = stat.icon;
//                   return (
//                     <motion.div
//                       key={index}
//                       className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
//                       whileHover={{ scale: 1.02, y: -5 }}
//                       variants={glowVariants}
//                       animate="animate"
//                     >
//                       <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4`}>
//                         <Icon className="w-6 h-6 text-white" />
//                       </div>
//                       <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
//                       <p className="text-slate-400 text-sm">{stat.label}</p>
//                     </motion.div>
//                   );
//                 })}
//               </motion.div>

//               {/* User Info Card */}
//               <motion.div
//                 variants={itemVariants}
//                 className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300"
//                 whileHover={{ scale: 1.02 }}
//               >
//                 <div className="flex items-center space-x-3 mb-6">
//                   <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center">
//                     <User className="w-5 h-5 text-white" />
//                   </div>
//                   <h3 className="text-xl font-semibold text-white">Profile Info</h3>
//                 </div>
                
//                 <div className="space-y-4">
//                   <div className="flex items-center space-x-3">
//                     <div className="w-8 h-8 rounded-lg bg-slate-700/50 flex items-center justify-center">
//                       <User className="w-4 h-4 text-emerald-400" />
//                     </div>
//                     <div>
//                       <p className="text-slate-400 text-sm">Full Name</p>
//                       <p className="text-white font-medium">{user?.name}</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-center space-x-3">
//                     <div className="w-8 h-8 rounded-lg bg-slate-700/50 flex items-center justify-center">
//                       <Mail className="w-4 h-4 text-emerald-400" />
//                     </div>
//                     <div>
//                       <p className="text-slate-400 text-sm">Email Address</p>
//                       <p className="text-white font-medium">{user?.email}</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-center space-x-3">
//                     <div className="w-8 h-8 rounded-lg bg-slate-700/50 flex items-center justify-center">
//                       <Shield className="w-4 h-4 text-emerald-400" />
//                     </div>
//                     <div>
//                       <p className="text-slate-400 text-sm">Account Status</p>
//                       <div className="flex items-center space-x-2">
//                         <p className="text-white font-medium">{user?.role}</p>
//                         {user?.isVerified && (
//                           <motion.div
//                             animate={{ scale: [1, 1.2, 1] }}
//                             transition={{ duration: 2, repeat: Infinity }}
//                             className="w-2 h-2 bg-green-400 rounded-full"
//                           />
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Activity Card */}
//               <motion.div
//                 variants={itemVariants}
//                 className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
//                 whileHover={{ scale: 1.02 }}
//               >
//                 <div className="flex items-center space-x-3 mb-6">
//                   <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
//                     <Calendar className="w-5 h-5 text-white" />
//                   </div>
//                   <h3 className="text-xl font-semibold text-white">Activity</h3>
//                 </div>
                
//                 <div className="space-y-4">
//                   <div>
//                     <p className="text-slate-400 text-sm mb-1">Member Since</p>
//                     <p className="text-white font-medium">
//                       {new Date(user?.createdAt).toLocaleDateString("en-US", {
//                         year: "numeric",
//                         month: "long",
//                         day: "numeric",
//                       })}
//                     </p>
//                   </div>
                  
//                   <div>
//                     <p className="text-slate-400 text-sm mb-1">Last Login</p>
//                     <p className="text-white font-medium">{formatDate(user?.lastLogin)}</p>
//                   </div>
                  
//                   <div className="pt-4 border-t border-slate-700/50">
//                     <div className="flex items-center justify-between">
//                       <span className="text-slate-400 text-sm">Session Status</span>
//                       <motion.div
//                         animate={{ 
//                           backgroundColor: ["#10b981", "#059669", "#10b981"],
//                         }}
//                         transition={{ duration: 2, repeat: Infinity }}
//                         className="px-3 py-1 rounded-full text-xs font-medium text-white"
//                       >
//                         Active
//                       </motion.div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Achievements Card */}
//               <motion.div
//                 variants={itemVariants}
//                 className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-300"
//                 whileHover={{ scale: 1.02 }}
//               >
//                 <div className="flex items-center space-x-3 mb-6">
//                   <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
//                     <Sparkles className="w-5 h-5 text-white" />
//                   </div>
//                   <h3 className="text-xl font-semibold text-white">Achievements</h3>
//                 </div>
                
//                 <div className="space-y-3">
//                   {achievements.map((achievement, index) => {
//                     const Icon = achievement.icon;
//                     return (
//                       <motion.div
//                         key={index}
//                         className="flex items-center space-x-3 p-3 rounded-xl bg-slate-700/30 border border-slate-600/30"
//                         whileHover={{ scale: 1.02, backgroundColor: "rgba(51, 65, 85, 0.5)" }}
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: index * 0.1 }}
//                       >
//                         <div className={`w-8 h-8 rounded-lg bg-slate-700/50 flex items-center justify-center ${achievement.color}`}>
//                           <Icon className="w-4 h-4" />
//                         </div>
//                         <div>
//                           <p className="text-white font-medium text-sm">{achievement.title}</p>
//                           <p className="text-slate-400 text-xs">{achievement.description}</p>
//                         </div>
//                       </motion.div>
//                     );
//                   })}
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}

//           {activeTab === 'profile' && (
//             <motion.div
//               key="profile"
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -20 }}
//               transition={{ duration: 0.3 }}
//               className="max-w-2xl mx-auto"
//             >
//               <motion.div
//                 variants={itemVariants}
//                 className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50"
//               >
//                 <h3 className="text-2xl font-bold text-white mb-6">Profile Settings</h3>
//                 <div className="space-y-6">
//                   <div className="text-center">
//                     <motion.img
//                       src={user?.avatar || "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"}
//                       alt="Profile"
//                       className="w-24 h-24 rounded-full mx-auto border-4 border-emerald-500/50 object-cover"
//                       whileHover={{ scale: 1.1 }}
//                     />
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="mt-4 px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg text-sm font-medium"
//                     >
//                       Change Avatar
//                     </motion.button>
//                   </div>
                  
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
//                       <input
//                         type="text"
//                         value={user?.name}
//                         className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
//                         readOnly
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
//                       <input
//                         type="email"
//                         value={user?.email}
//                         className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
//                         readOnly
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}

//           {activeTab === 'settings' && (
//             <motion.div
//               key="settings"
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -20 }}
//               transition={{ duration: 0.3 }}
//               className="max-w-2xl mx-auto"
//             >
//               <motion.div
//                 variants={itemVariants}
//                 className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50"
//               >
//                 <h3 className="text-2xl font-bold text-white mb-6">Settings</h3>
//                 <div className="space-y-6">
//                   {[
//                     { label: 'Email Notifications', description: 'Receive updates via email' },
//                     { label: 'Two-Factor Authentication', description: 'Add an extra layer of security' },
//                     { label: 'Dark Mode', description: 'Toggle dark/light theme' },
//                     { label: 'Auto-Save', description: 'Automatically save your progress' }
//                   ].map((setting, index) => (
//                     <motion.div
//                       key={index}
//                       className="flex items-center justify-between p-4 bg-slate-700/30 rounded-xl border border-slate-600/30"
//                       whileHover={{ backgroundColor: "rgba(51, 65, 85, 0.5)" }}
//                     >
//                       <div>
//                         <p className="text-white font-medium">{setting.label}</p>
//                         <p className="text-slate-400 text-sm">{setting.description}</p>
//                       </div>
//                       <motion.div
//                         className="w-12 h-6 bg-emerald-500 rounded-full p-1 cursor-pointer"
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         <motion.div
//                           className="w-4 h-4 bg-white rounded-full"
//                           layout
//                           transition={{ type: "spring", stiffness: 700, damping: 30 }}
//                         />
//                       </motion.div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.div>
//     </div>
//   );
// };

// export default DashboardPage;





import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { formatDate } from "../utils/date";

const DashboardPage = () => {
	const { user, logout } = useAuthStore();

	const handleLogout = () => {
		logout();
	};
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.9 }}
			transition={{ duration: 0.5 }}
			className='max-w-md w-full mx-auto mt-10 p-8 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800'
		>
			<h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text'>
				Dashboard
			</h2>

			<div className='space-y-6'>
				<motion.div
					className='p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
				>
					<h3 className='text-xl font-semibold text-green-400 mb-3'>Profile Information</h3>
					<p className='text-gray-300'>Name: {user.name}</p>
					<p className='text-gray-300'>Email: {user.email}</p>
				</motion.div>
				<motion.div
					className='p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
				>
					<h3 className='text-xl font-semibold text-green-400 mb-3'>Account Activity</h3>
					<p className='text-gray-300'>
						<span className='font-bold'>Joined: </span>
						{new Date(user.createdAt).toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</p>
					<p className='text-gray-300'>
						<span className='font-bold'>Last Login: </span>

						{formatDate(user.lastLogin)}
					</p>
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.6 }}
				className='mt-4'
			>
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					onClick={handleLogout}
					className='w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white 
				font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700
				 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900'
				>
					Logout
				</motion.button>
			</motion.div>
		</motion.div>
	);
};
export default DashboardPage;