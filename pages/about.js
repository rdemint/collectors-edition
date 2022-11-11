import Container from '@/components/Container'

export default function About() {
    return (
        <Container>
        <div className="flex justify-center max-w-3xl mx-auto">
            <div class="prose pt-8">
            <h2>About Raines</h2>
            <p>Raines Demint is inspired by individuals and teams that strive to incrementally better the world by bringing great ideas to life.</p>
            <p>He gets to live this out by building quality management system (QMS) tools that help medical device teams get to market and thrive.</p>
            <p>Raines has been serving medical device teams since 2014, and has felt the challenges of the industry first-hand. He channels his experiences (positive and negative) into his mission to improve the way quality management systems are designed, built, maintained, and audited.</p>
            <p>Raines believes;</p>
            <ul>
                <li>The QMS should serve as a framework, not busywork.</li>
                 <li>The QMS should be a toolkit, not checkbox compliance.</li>
                <li>The QMS should be a starter, to avoid reinventing the wheel.</li>
            </ul>
            <p>He seeks to apply learnings from related disciplines such as software development, user experience design, systems engineering, technical writing, content management, and issue management to improve on current industry practices and tools.</p>
            <p>Raines would love to hear from you!</p>
            <ul>
                <li>Where is your QMS causing the most friction for your team?</li>
                <li>What RAQA-related tooling do you need most to get to market and stay there?</li>
                <li>What do you most value in a consultant, coach, auditor, or trainer for your team?</li>
            </ul>

                </div>
            </div>
        </Container>
    )
}