import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Link } from "wouter";
import { 
  ChevronRight, 
  ArrowRight, 
  Filter, 
  Search,
  Building2,
  Briefcase,
  GraduationCap,
  Leaf,
  HeartHandshake,
  Factory,
  BadgeCheck
} from "lucide-react";
import { useState } from "react";
import { Input } from "../components/ui/input";
import { useI18n } from "../lib/i18n/i18n-provider";

// Project data
const projects = [
  {
    id: 1,
    title: "Corporate Restructuring & Capacity Building",
    category: "Corporate Strategy",
    image: "bg-gradient-to-br from-blue-500/20 to-purple-500/20",
    client: "National Finance Corporation",
    location: "East Africa",
    duration: "8 months",
    outcomes: [
      "30% increase in operational efficiency",
      "Staff capacity enhanced through targeted training programs",
      "New organizational structure implemented with clear reporting lines",
      "Improved internal communication systems"
    ],
    tags: ["Strategy", "Capacity Building", "Restructuring"]
  },
  {
    id: 2,
    title: "Strategic Business Expansion Advisory",
    category: "Business Growth",
    image: "bg-gradient-to-br from-green-500/20 to-teal-500/20",
    client: "TechSolutions Inc.",
    location: "West Africa",
    duration: "6 months",
    outcomes: [
      "Successful market entry into 3 new territories",
      "40% increase in client acquisition",
      "Strategic partnerships established with 5 key industry players",
      "Development of scalable business model"
    ],
    tags: ["Market Expansion", "Growth Strategy", "Business Development"]
  },
  {
    id: 3,
    title: "Community Health Initiative Implementation",
    category: "Healthcare",
    image: "bg-gradient-to-br from-red-500/20 to-orange-500/20",
    client: "Ministry of Health",
    location: "West Africa",
    duration: "12 months",
    outcomes: [
      "Health services delivered to 50,000+ community members",
      "Training provided to 200+ community health workers",
      "Established sustainable health monitoring systems",
      "30% reduction in preventable disease incidence"
    ],
    tags: ["Healthcare", "Community Development", "Project Management"]
  },
  {
    id: 4,
    title: "Agricultural Supply Chain Optimization",
    category: "Agriculture",
    image: "bg-gradient-to-br from-green-600/20 to-yellow-500/20",
    client: "East African Farmers Cooperative",
    location: "East Africa",
    duration: "9 months",
    outcomes: [
      "25% reduction in post-harvest losses",
      "Improved market access for 5,000+ smallholder farmers",
      "Implementation of quality control systems",
      "Creation of direct-to-consumer distribution channels"
    ],
    tags: ["Agriculture", "Supply Chain", "Logistics"]
  },
  {
    id: 5,
    title: "Educational Institution Capacity Development",
    category: "Education",
    image: "bg-gradient-to-br from-indigo-500/20 to-blue-500/20",
    client: "West African University Consortium",
    location: "Central Africa",
    duration: "15 months",
    outcomes: [
      "Curriculum redesign for 12 degree programs",
      "Faculty development program implemented for 150+ educators",
      "Establishment of industry partnership program",
      "Digital learning infrastructure developed"
    ],
    tags: ["Education", "Capacity Building", "Institutional Development"]
  },
  {
    id: 6,
    title: "Sustainable Manufacturing Process Implementation",
    category: "Manufacturing",
    image: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20",
    client: "Industrial Solutions Ltd.",
    location: "Southern Africa",
    duration: "10 months",
    outcomes: [
      "40% reduction in carbon footprint",
      "Implementation of circular economy principles",
      "Energy efficiency improved by 35%",
      "Cost savings of $1.2M annually"
    ],
    tags: ["Manufacturing", "Sustainability", "Process Optimization"]
  }
];

// Category icons mapping
const categoryIcons: Record<string, JSX.Element> = {
  "Corporate Strategy": <Building2 size={20} />,
  "Business Growth": <Briefcase size={20} />,
  "Healthcare": <HeartHandshake size={20} />,
  "Agriculture": <Leaf size={20} />,
  "Education": <GraduationCap size={20} />,
  "Manufacturing": <Factory size={20} />
};

// Available categories and filters
const categories = Array.from(new Set(projects.map(project => project.category)));
const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

export default function ProjectsPage() {
  const { t } = useI18n();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter projects based on selected category, tags, and search query
  const filteredProjects = projects.filter(project => {
    // Category filter
    if (activeCategory && project.category !== activeCategory) {
      return false;
    }
    
    // Tags filter (must match all selected tags)
    if (activeTags.length > 0 && !activeTags.every(tag => project.tags.includes(tag))) {
      return false;
    }
    
    // Search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        project.title.toLowerCase().includes(query) ||
        project.client.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query) ||
        project.location.toLowerCase().includes(query) ||
        project.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    return true;
  });

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    if (activeTags.includes(tag)) {
      setActiveTags(activeTags.filter(t => t !== tag));
    } else {
      setActiveTags([...activeTags, tag]);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-dark text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOC0xLjc5LTQtNC00cy00IDEuNzkyLTQgNHYyaDJ2LTJjMC0xLjEwNC44OTYtMiAyLTJzMiAuODk2IDIgMnYyaDJ2LTJ6bTAgMGgydjJoLTJ2LTJ6bS0xNiAwdjJoMnYtMmMwLTEuMTA0Ljg5Ni0yIDItMnMyIC44OTYgMiAydjJoMnYtMmMwLTIuMjA4LTEuNzktNC00LTRzLTQgMS43OTItNCA0eiIvPjwvZz48L2c+PC9zdmc+')] bg-center" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Success Stories & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">Transformative Projects</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Explore our portfolio of successful projects across various sectors, showcasing our expertise in delivering measurable results and sustainable impact for our clients.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary text-white hover:bg-secondary/90 shadow-lg hover:shadow-xl transition-all"
                >
                  <Link href="/contact">
                    Discuss Your Project
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Link href="/services">
                    Our Services
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-gray-100 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">{t('common.home')}</Link>
            <ChevronRight size={16} className="mx-2" />
            <span className="text-primary font-medium">{t('common.projects')}</span>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Search and Filter */}
          <div className="mb-12 bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Filter size={18} className="mr-2 text-primary" />
              Browse Our Project Portfolio
            </h2>
            
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
              {/* Search */}
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  placeholder="Search projects by name, client, or keyword..."
                  className="pl-10 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 w-full lg:w-auto">
                <span className="flex items-center text-sm text-gray-600 mr-2 whitespace-nowrap">
                  <Filter size={16} className="mr-1 text-gray-400" /> Categories:
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveCategory(null)}
                  className={`${
                    activeCategory === null 
                      ? "bg-primary border-primary text-white hover:bg-primary/90" 
                      : "bg-white hover:bg-gray-50"
                  } transition-colors`}
                >
                  All
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant="outline"
                    size="sm"
                    onClick={() => setActiveCategory(category)}
                    className={`flex items-center ${
                      activeCategory === category 
                        ? "bg-primary border-primary text-white hover:bg-primary/90" 
                        : "bg-white hover:bg-gray-50"
                    } transition-colors`}
                  >
                    {categoryIcons[category]} 
                    <span className="ml-1">{category}</span>
                  </Button>
                ))}
              </div>
            </div>
            
            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2 pt-6 border-t border-gray-100">
              <span className="flex items-center text-sm text-gray-600 mr-2">
                <span className="bg-gray-100 w-5 h-5 rounded-full flex items-center justify-center mr-1 text-gray-500">#</span> Filter by tags:
              </span>
              {allTags.map((tag) => (
                <Button
                  key={tag}
                  variant="outline"
                  size="sm"
                  onClick={() => toggleTag(tag)}
                  className={`
                    ${activeTags.includes(tag) 
                      ? "bg-secondary border-secondary text-white hover:bg-secondary/90" 
                      : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"}
                    transition-all
                  `}
                >
                  {tag}
                </Button>
              ))}
              {activeTags.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setActiveTags([])}
                  className="text-gray-500 hover:text-gray-700"
                >
                  Clear Filters
                </Button>
              )}
            </div>
            
            {/* Active filters summary */}
            {(activeCategory !== null || activeTags.length > 0 || searchQuery) && (
              <div className="mt-4 flex items-center text-sm text-gray-600">
                <span className="mr-2">Active filters:</span>
                {activeCategory && (
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs mr-2">
                    Category: {activeCategory}
                  </span>
                )}
                {activeTags.length > 0 && (
                  <span className="bg-secondary/10 text-secondary px-2 py-1 rounded-full text-xs mr-2">
                    Tags: {activeTags.length}
                  </span>
                )}
                {searchQuery && (
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                    Search: "{searchQuery}"
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-16 px-4">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <Search className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">No Projects Found</h3>
                <p className="text-gray-600 mb-6 text-center max-w-md">
                  We couldn't find any projects matching your current search criteria and filters.
                </p>
                <Button 
                  onClick={() => {
                    setActiveCategory(null);
                    setActiveTags([]);
                    setSearchQuery("");
                  }}
                  className="bg-primary text-white hover:bg-primary/90"
                >
                  Reset All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOC0xLjc5LTQtNC00cy00IDEuNzkyLTQgNHYyaDJ2LTJjMC0xLjEwNC44OTYtMiAyLTJzMiAuODk2IDIgMnYyaDJ2LTJ6bTAgMGgydjJoLTJ2LTJ6bS0xNiAwdjJoMnYtMmMwLTEuMTA0Ljg5Ni0yIDItMnMyIC44OTYgMiAydjJoMnYtMmMwLTIuMjA4LTEuNzktNC00LTRzLTQgMS43OTItNCA0eiIvPjwvZz48L2c+PC9zdmc+')] bg-center" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
              Partner with GIGEE Consult
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Ready to Transform Your Vision into Reality?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Our expert team is ready to help you achieve your goals with proven methodologies and innovative solutions.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="/contact">
                  <span className="flex items-center">
                    Start Your Project <ArrowRight className="ml-2" size={16} />
                  </span>
                </Link>
              </Button>
              
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 transition-all"
              >
                <Link href="/services">
                  <span className="flex items-center">
                    Explore Our Services
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    category: string;
    image: string;
    client: string;
    location: string;
    duration: string;
    outcomes: string[];
    tags: string[];
  };
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const { t } = useI18n();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500 border border-gray-100"
    >
      {/* Project Image/Gradient */}
      <div className={`h-52 ${project.image} relative group-hover:scale-105 transition-transform duration-500 flex items-end`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 bg-white/90 rounded-full text-primary font-medium text-xs flex items-center">
            {categoryIcons[project.category]} 
            <span className="ml-1">{project.category}</span>
          </span>
        </div>
      </div>
      
      {/* Project Details */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
        
        <div className="mb-5 grid grid-cols-2 gap-3 text-sm">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Client</span>
            <span className="text-gray-700 font-medium">{project.client}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Location</span>
            <span className="text-gray-700 font-medium">{project.location}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Duration</span>
            <span className="text-gray-700 font-medium">{project.duration}</span>
          </div>
        </div>
        
        <div className="mb-6 bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
            <BadgeCheck size={16} className="text-secondary mr-1.5" /> Key Outcomes
          </h4>
          <ul className="text-sm text-gray-700 space-y-2">
            {project.outcomes.slice(0, 2).map((outcome, idx) => (
              <li key={idx} className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 mr-2 flex-shrink-0"></span>
                <span>{outcome}</span>
              </li>
            ))}
            {project.outcomes.length > 2 && (
              <li className="text-primary text-xs font-medium pt-1">+ {project.outcomes.length - 2} more outcomes</li>
            )}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full hover:bg-gray-200 transition-colors">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="pt-4 border-t border-gray-100">
          <Button 
            asChild
            variant="ghost" 
            className="w-full justify-center group text-primary hover:text-white hover:bg-primary"
          >
            <Link href={`/projects/${project.id}`}>
              View Project Details <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}