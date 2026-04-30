import { useEffect, useState } from "react";
import type { Project } from "../types"
import { ImageIcon, Loader2Icon, VideoIcon, XIcon } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import toast from "react-hot-toast";
import api from "../configs/axios";
import { GhostButton } from "../components/Buttons";

const CommunityModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {

  const handleDownload = async (url: string, filename: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      toast.error("Download failed. Try again.");
    }
  };
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-[#0f0f1a] border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-1 rounded-full bg-white/10 hover:bg-white/20 transition"
        >
          <XIcon className="size-5 text-white" />
        </button>

        <div className="p-6 grid lg:grid-cols-3 gap-6">
          {/* media player */}
          <div className="lg:col-span-2">
            <div className="glass-panel inline-block p-2 rounded-2xl w-full">
              <div
                className={`${
                  project.aspectRatio === "9:16" ? "aspect-9/16" : "aspect-video"
                } rounded-xl bg-gray-900 overflow-hidden`}
              >
                {project.generatedVideo ? (
                  <video
                    src={project.generatedVideo}
                    controls
                    autoPlay
                    loop
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={project.generatedImage}
                    alt={project.productName}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          </div>

          {/* sidebar */}
          <div className="space-y-4">
            {/* info */}
            <div className="glass-panel p-4 rounded-2xl">
              <h2 className="text-lg font-semibold mb-1">{project.productName}</h2>
              {project.productDescription && (
                <p className="text-sm text-gray-400">{project.productDescription}</p>
              )}
              <p className="text-xs text-gray-500 mt-2">
                {new Date(project.createdAt).toLocaleString()}
              </p>
            </div>

            {/* downloads */}
            <div className="glass-panel p-4 rounded-2xl">
              <h3 className="text-base font-semibold mb-3">Actions</h3>
              {/* <div className="flex flex-col gap-2">
                <a href={project.generatedImage} download target="_blank" rel="noreferrer">
                  <GhostButton
                    disabled={!project.generatedImage}
                    className="w-full justify-center rounded-md py-2.5 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  >
                    <ImageIcon className="size-4" />
                    Download Image
                  </GhostButton>
                </a>
                <a href={project.generatedVideo} download target="_blank" rel="noreferrer">
                  <GhostButton
                    disabled={!project.generatedVideo}
                    className="w-full justify-center rounded-md py-2.5 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  >
                    <VideoIcon className="size-4" />
                    Download Video
                  </GhostButton>
                </a>
              </div> */}
              <div className="flex flex-col gap-2">
  <GhostButton
    disabled={!project.generatedImage}
    className="w-full justify-center rounded-md py-2.5 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
    onClick={() => handleDownload(project.generatedImage|| '', `${project.productName}-image.jpg`)}
  >
    <ImageIcon className="size-4" />
    Download Image
  </GhostButton>

  <GhostButton
    disabled={!project.generatedVideo}
    className="w-full justify-center rounded-md py-2.5 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
    onClick={() => handleDownload(project.generatedVideo!, `${project.productName}-video.mp4`)}
  >
    <VideoIcon className="size-4" />
    Download Video
  </GhostButton>
</div>
            </div>

            {/* source images */}
            {project.uploadedImages?.length > 0 && (
              <div className="glass-panel p-4 rounded-2xl">
                <h3 className="text-base font-semibold mb-3">Source Images</h3>
                <div className="flex gap-2 flex-wrap">
                  {project.uploadedImages.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`source-${i}`}
                      className="w-14 h-14 object-cover rounded-lg border border-white/10"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Community = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const fetchProjects = async () => {
    try {
      const { data } = await api.get("/api/project/published");
      setProjects(data.projects);
      setLoading(false);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return loading ? (
    <div className="flex items-center justify-center min-h-screen">
      <Loader2Icon className="size-7 animate-spin text-indigo-400" />
    </div>
  ) : (
    <div className="min-h-screen text-white p-6 md:p-12 my-28">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">Community</h1>
          <p className="text-gray-400">See what others are creating with AdGen-AI</p>
        </header>

        {/* projects list */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <ProjectCard
                gen={project}
                setGenerations={setProjects}
                forCommunity={true}
              />
            </div>
          ))}
        </div>
      </div>

      {/* modal */}
      {selectedProject && (
        <CommunityModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Community;