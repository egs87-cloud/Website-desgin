"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("home")

  const renderHome = () => (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center">
        <Image
          src="/images/elijah-profile.png"
          alt="Elijah Schechter"
          width={200}
          height={200}
          className="rounded-full mx-auto mb-6 border-4 border-primary/20"
        />
        <h1 className="text-5xl font-bold text-foreground mb-4 font-[var(--font-heading)]">Elijah Schechter</h1>
        <p className="text-xl text-muted-foreground mb-6 font-[var(--font-sans)]">
          Cornell Biology Student & Division I Track Athlete
        </p>
        <div className="flex items-center justify-center gap-4 text-muted-foreground mb-8 flex-wrap">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>Trumansburg, NY</span>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="w-4 h-4" />
            <span>(607) 220-8407</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail className="w-4 h-4" />
            <span>egs87@cornell.edu</span>
          </div>
        </div>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button asChild className="bg-primary hover:bg-primary/90">
            <a href="mailto:egs87@cornell.edu">Get In Touch</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com/egs87-cloud" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://www.linkedin.com/in/elijah-schechter-6bb146274/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-6 text-center font-[var(--font-heading)]">About Me</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-foreground leading-relaxed">
              I am a motivated biological sciences student from Cornell University with strong experience in data
              analysis, experimental design, and laboratory work. My background combines computational biology,
              statistical analysis, and an appreciation for molecular biology with a hands-on research and laboratory
              setting. I am in search of a position to apply my skills in modeling and predictive analytics to support
              experimentation and growth.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  )

  const renderExperience = () => (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-foreground mb-8 text-center font-[var(--font-heading)]">Experience</h2>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-[var(--font-heading)]">Performance Science Intern</CardTitle>
          <CardDescription>Wu Tsai Jayhawk Athletic Performance Lab • Lawrence, Kansas</CardDescription>
          <Badge variant="secondary" className="w-fit">
            June-July 2025
          </Badge>
        </CardHeader>
        <CardContent>
          <p className="text-foreground leading-relaxed">
            As a Performance Science Intern at the Wu Tsai Jayhawk Lab in Lawrence Kansas, I conducted mass data set
            analysis to inform research, reviewed known literature, and designed experiments. I collected and processed
            large amounts of aggregate data, specifically within a Physiology and sport context. I also integrated
            hardware and software to fully develop measurement tools. I had final deliverables in the form of
            large-scale presentation of data in a digestible format, which is currently being using for further
            experimental design.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-[var(--font-heading)]">Laboratory Research Assistant</CardTitle>
          <CardDescription>Heck Lab, USDA-ARS • Ithaca, New York</CardDescription>
          <Badge variant="secondary" className="w-fit">
            2021-2024
          </Badge>
        </CardHeader>
        <CardContent>
          <p className="text-foreground leading-relaxed">
            As a Laboratory Research assistant at the Heck Lab for the USDA branch of Cornell University I managed large
            scale data sets gathered over multiple years of experimentation, used these data sets to inform research,
            and coauthored two papers currently pending publishing. My projects included bulk data management and
            presentation, advanced statistical modeling, and molecular biological engineering and imaging.
          </p>
        </CardContent>
      </Card>
    </div>
  )

  const renderEducation = () => (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-foreground mb-8 text-center font-[var(--font-heading)]">Education</h2>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-[var(--font-heading)]">Cornell University</CardTitle>
          <CardDescription>College of Agriculture and Life Science • Ithaca, New York</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-lg font-semibold">Bachelor of Science in Biology</h3>
            <Badge variant="secondary">Expected May 2026</Badge>
          </div>

          <p className="text-foreground leading-relaxed mb-6">
            My academic journey at Cornell has been shaped by a rigorous curriculum that bridges traditional biological
            sciences with cutting-edge computational approaches. Through courses in computational biology, statistics,
            and computer science, I've developed a unique skill set that combines biological understanding with data
            analysis capabilities.
          </p>

          <p className="text-foreground leading-relaxed mb-6">
            My coursework in pharmacology, comparative physiology, and genetics has provided me with a deep
            understanding of biological systems at multiple scales, from molecular mechanisms to whole-organism
            function. Laboratory courses in investigative biology have honed my experimental design skills and taught me
            to approach scientific questions with methodical precision.
          </p>

          <div className="mb-6">
            <h4 className="font-semibold mb-3">Relevant Coursework:</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Computational Biology",
                "Statistics",
                "Computer Science",
                "Pharmacology",
                "Comparative Physiology and Anatomy",
                "Animal Physiology",
                "Investigative Biology Lab",
                "Cognitive Science",
                "Organic and Biological Chemistry",
                "Genetics",
              ].map((course) => (
                <Badge key={course} variant="outline" className="text-xs">
                  {course}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Technical Skills:</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "R Programming",
                "Python",
                "Predictive Analysis",
                "Data Visualization",
                "Microscopy",
                "ImageJ",
                "ChimeraX",
                "Experimental Design",
                "Literature Review",
                "Statistical Analysis",
              ].map((skill) => (
                <Badge key={skill} variant="default" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderInvolvements = () => (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-foreground mb-8 text-center font-[var(--font-heading)]">
        Campus Involvements
      </h2>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-[var(--font-heading)]">Division One Track and Field Athlete</CardTitle>
          <CardDescription>Cornell University • Ithaca, New York</CardDescription>
          <Badge variant="secondary" className="w-fit">
            2023-Present
          </Badge>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <p className="text-foreground leading-relaxed mb-4">
                As a middle-distance specialist focusing on the 800-meters, I've achieved significant competitive
                success including a second-place finish at the 2025 Ivy League Championship and scoring at the 2024 IC4A
                Championship. These achievements represent the culmination of dedicated training and strategic
                performance optimization.
              </p>
              <p className="text-foreground leading-relaxed">
                Balancing over 20 hours of weekly training commitments with a full academic course load has taught me
                exceptional time management and prioritization skills. Through this experience, I've developed a
                comprehensive understanding of injury prevention, performance psychology, and the critical role of
                teamwork in achieving individual and collective goals.
              </p>
            </div>
            <div className="w-full md:w-80 flex-shrink-0">
              <Image
                src="/images/elijah-track.png"
                alt="Elijah competing in the 800m at a track meet"
                width={320}
                height={240}
                className="rounded-lg border-2 border-primary/20 object-cover"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-[var(--font-heading)]">Executive Board Member</CardTitle>
          <CardDescription>Run Your City Ithaca • Ithaca, New York</CardDescription>
          <Badge variant="secondary" className="w-fit">
            Present
          </Badge>
        </CardHeader>
        <CardContent>
          <p className="text-foreground leading-relaxed mb-4">
            As an executive board member of Run Your City Ithaca, a 501(c)(3) nonprofit organization, I help lead our
            mission to bring track and field opportunities to Ithaca's youth. This role has allowed me to combine my
            passion for athletics with community service, working to make track and field accessible to young people who
            might not otherwise have these opportunities.
          </p>
          <p className="text-foreground leading-relaxed">
            I organize and lead practice sessions, collaborate with community members to expand our reach, and help
            develop programs that inspire the next generation of athletes. This experience has strengthened my
            leadership skills while allowing me to give back to the sport that has shaped my own personal and academic
            journey at Cornell.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-[var(--font-heading)]">Route-Setter & Team Leader</CardTitle>
          <CardDescription>Lindseth Climbing Wall, Cornell University • Ithaca, New York</CardDescription>
          <Badge variant="secondary" className="w-fit">
            2021-Present
          </Badge>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <p className="text-foreground leading-relaxed mb-4">
                Working as a route-setter at Cornell's climbing wall has been one of my most rewarding campus
                involvements. I collaborate with a dynamic team to design and implement climbing routes that challenge
                climbers of all skill levels, from beginners taking their first steps on the wall to advanced climbers
                seeking technical challenges.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                The role requires creativity, technical knowledge, and strong safety consciousness as I work at height
                with specialized route-setting equipment. I've developed leadership skills by mentoring new team members
                and ensuring our climbing community maintains the highest safety standards while fostering an inclusive,
                welcoming environment.
              </p>
              <p className="text-foreground leading-relaxed">
                This position has taught me the importance of balancing challenge with accessibility, creating routes
                that push climbers to grow while ensuring everyone feels welcome to participate in our climbing
                community.
              </p>
            </div>
            <div className="w-full md:w-80 flex-shrink-0">
              <Image
                src="/images/elijah-climbing.png"
                alt="Elijah route-setting at the climbing wall"
                width={320}
                height={400}
                className="rounded-lg border-2 border-primary/20 object-cover"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-[var(--font-heading)]">Founding Member</CardTitle>
          <CardDescription>Beta Rho Chi Honor Society • Cornell University</CardDescription>
          <Badge variant="secondary" className="w-fit">
            January 2025-Present
          </Badge>
        </CardHeader>
        <CardContent>
          <p className="text-foreground leading-relaxed mb-4">
            As a founding member of Cornell's premier biotechnology and pharmaceutical honor society, I've had the
            unique opportunity to help establish the organization's culture and mission from the ground up. This
            involvement has connected me with like-minded peers who share my passion for biological sciences and their
            real-world applications.
          </p>
          <p className="text-foreground leading-relaxed">
            Through Beta Rho Chi, I actively participate in community engagement initiatives, professional development
            workshops, and discussions of current topics in biotechnology and pharmaceuticals. This experience has
            expanded my professional network and deepened my understanding of how biological research translates into
            practical applications that benefit society.
          </p>
        </CardContent>
      </Card>
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      <div className="relative bg-gradient-to-br from-card to-background py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Navigation activeTab={activeTab} onTabChange={setActiveTab} />

          {activeTab === "home" && renderHome()}
          {activeTab === "experience" && renderExperience()}
          {activeTab === "education" && renderEducation()}
          {activeTab === "involvements" && renderInvolvements()}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="max-w-4xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Elijah Schechter. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
