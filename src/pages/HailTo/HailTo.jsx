import React from 'react';
import styles from './HailTo.module.scss';

const HailTo = () => {
    return (
        <article
            className={`${styles.hailTo} case-study`}
        >
            <h1 className="gradient-text page-title">HailTo</h1>
            <div className="row align-items-center">
                <div className="col-md-3">
                    <p className="intro">
                        The entertainment industry has a vast amount of untapped
                        social reach in the form of their on-screen Talent.
                        Stars of shows and movies often have many times the
                        social reach and engagement of the official social
                        accounts for the shows and movies they are in. This
                        presents a huge opportunity to efficiently boost
                        marketing clout on social. At Storm Ideas, we built
                        HailTo to tap into this reach - using our unique
                        combination of domain knowledge, pragmatic design and
                        the latest technologies.
                    </p>
                </div>
                <div className="col-md-3 article-image">
                    <img
                        src="https://placedog.net/768/768"
                        alt="cover pupper"
                    />
                </div>
                <div className="offset-lg-1 col-lg-4">
                    <p>
                        My role in creating HailTo was to lead the design of our
                        new product, from inception and definition, through the
                        first release and beyond.
                    </p>
                    <p>
                        Initially I worked closely with the founder of Storm
                        Ideas on the first prototypes, sketching out the
                        potential branding and aesthetics, features, and user
                        flows. Our Creative Director played a vital role in
                        steering the aesthetics, branding and marketing assets
                        in the right direction, while my focus was on the UX.
                    </p>
                    <p>
                        Towards the end of the first design sprints and during
                        production, I worked closely with our development team
                        to ensure that the design implementation would be as
                        good as possible, and we could solve any new design
                        problems as soon as they came up.
                    </p>
                    <div className="article-image">
                        <figure>
                            <img
                                src="https://duhg9m9sh0lp8.cloudfront.net/fit-in/2000x0/img/projects/hailto/laptop-and-phone.png"
                                alt="cover pupper"
                            />
                        </figure>
                        <figcaption>
                            HailTo Admin interface and iPhone App
                        </figcaption>
                    </div>

                    <hr />

                    <h2>Product definition and use cases</h2>
                    <p>
                        The idea for the product came from Storm Ideas'
                        experience of working closely with the US entertainment
                        industry for a number of years on a variety of digital
                        and marketing projects. This allowed us to identify some
                        key areas that we thought would have the most
                        opportunity to improve our clients workflows:
                    </p>
                    <ul>
                        <li>
                            Requesting media from Talent to be shared on
                            official social accounts.
                        </li>
                        <li>
                            Requesting that Talent share the latest assets and
                            PR material.
                        </li>
                        <li>
                            Make official assets easily available to Talent.
                        </li>
                        <li>
                            In app support for Talent, in a way that makes the
                            app as flexible as possible, and could identify pain
                            points and potential opportunities for improvement.
                        </li>
                        <li>
                            Provide a hub for existing social teams to be able
                            to work more efficiently with Talent.
                        </li>
                        <li>
                            Improve communication between Talent and Social
                            Media teams.
                        </li>
                    </ul>
                    <div className="article-image">
                        <figure>
                            <img
                                src="https://duhg9m9sh0lp8.cloudfront.net/fit-in/2000x0/img/projects/hailto/sketches-1.jpg"
                                alt="cover pupper"
                            />
                        </figure>
                        <figcaption>
                            Considering the onboarding experience very early on
                            helped solidify the purpose of the product in my
                            mind
                        </figcaption>
                    </div>
                    <h2>User Personas</h2>
                    <h3>Social media manager</h3>
                    <ul>
                        <li>Primary user of the admin interface.</li>
                        <li>Vital point of contact for Talent.</li>
                        <li>Used to juggling multiple social channels.</li>
                        <li>Has to organise a lot of assets.</li>
                        <li>Has to co-ordinate across social properties.</li>
                        <li>
                            HailTo should combine existing workflows seamlessly
                            for this user.
                        </li>
                        <li>
                            It's a priority for this user that HailTo improves
                            meaningful social reach of the whole organisation.
                        </li>
                    </ul>

                    <h3>Business Executive</h3>
                    <ul>
                        <li>Uses both the admin interface and app.</li>
                        <li>Time poor.</li>
                        <li>Not a primary user but a key stakeholder.</li>
                        <li>
                            Must be able understand the value proposition
                            quickly.
                        </li>
                        <li>
                            HailTo should prove that it's valuable for
                            co-ordination between marketing and talent.
                        </li>
                        <li>
                            It's a priority for this user that HailTo improves
                            meaningful social reach of the whole organisation.
                        </li>
                    </ul>

                    <h3>Talent</h3>
                    <ul>
                        <li>Primary app user.</li>
                        <li>Time poor.</li>
                        <li>Likes to see and share their own work.</li>
                        <li>Very concerned about privacy and security.</li>
                        <li>Wants to increase their social media following.</li>
                    </ul>

                    <p>
                        We were very familiar with the tools used by the social
                        media managers, so this was a great starting point for
                        our competitor analysis. Best of breed enterprise
                        software had already solved a lot of the problems we'd
                        face while designing the admin interface, so we found a
                        lot of inspiration here.
                    </p>
                    <p>
                        There were also a lot of existing paradigms that the app
                        should fit to boost immediate familiarity and
                        trust&#8202;-&#8202;it should feel like the social media
                        apps that the user is most familiar with. This is why we
                        began by taking inspiration from feeds and notifications
                        found on social networks to make the process of sharing
                        from HailTo as familiar as possible.
                    </p>
                    <div className="article-image">
                        <figure>
                            <img
                                src="https://duhg9m9sh0lp8.cloudfront.net/fit-in/2000x0/img/projects/hailto/competitor-analysis.jpg"
                                alt="cover pupper"
                            />
                        </figure>
                        <figcaption>
                            Some of the products we looked at for inspiration
                            and competitor analysis
                        </figcaption>
                    </div>
                    <h2>Key Flows</h2>
                    <h3>Admin</h3>
                    <ul>
                        <li>
                            Add and manage Talent (app user invites and
                            management).
                        </li>
                        <li>Upload/manage assets for Talent to access.</li>
                        <li>Request sharing of assets.</li>
                        <li>Request media from Talent.</li>
                        <li>
                            Provide support for Talent from within the admin.
                        </li>
                    </ul>
                    <h3>App</h3>
                    <ul>
                        <li>Login and authentication.</li>
                        <li>Browse/share relevant assets.</li>
                        <li>
                            Create and send content to social media managers to
                            be used in official campaigns.
                        </li>
                        <li>Get content to share on social media.</li>
                        <li>Liaise with social media managers.</li>
                    </ul>

                    <hr />

                    <h2>Design</h2>
                    <p>
                        We began working on HailTo with quite a clear idea of
                        the problems we wanted to solve and how the product
                        would fit in to the ecosystem of enterprise workflows,
                        social media, marketing, and smartphones. This gave us
                        the architecture that our product should fit into, and
                        defined the shape of a solution that would be familiar
                        enough to encourage adoption. A PWA Admin interface for
                        the social media managers, and a smartphone app for
                        Talent.
                    </p>
                    <h3>Admin Interface</h3>
                    <p>
                        This was my first experience of designing an entire
                        admin interface, so I was pretty excited to get started.
                        Having an attitude of "design to learn" seems to have
                        been useful here, as it kept experiments open ended
                        enough to continually accelerate the process and then
                        next flow or screen I'd design always started better
                        than the last.
                    </p>
                    <p>
                        It was also the first time I started by prototyping in
                        HTML. Starting from a library of common admin interface
                        components and pages allowed us to get 80% of the way to
                        a working solution with 20% of the work. It also allowed
                        us to get very close to an MVP and use this as a robust
                        starting point on which to iterate.
                    </p>
                    <p>
                        Seeing HTML prototypes early on with sample data and
                        working navigation really crystallises what changes need
                        to be made to the Information Architecture, what flows
                        should use common components, what patterns may be
                        familiar, and how we can get the data required to run
                        the app. It really forces holistic, system thinking from
                        the start which has proven to be hugely beneficial down
                        the line in terms of aiding development of new features
                        that can build on and tweak existing components and
                        patterns.
                    </p>
                    <p>
                        Of course, it also gave us a big head start with
                        font-end dev.
                    </p>
                    <div className="article-image">
                        <figure>
                            <img
                                src="https://duhg9m9sh0lp8.cloudfront.net/fit-in/2000x0/img/projects/hailto/admin-assets-section.jpg"
                                alt="cover pupper"
                            />
                        </figure>
                        <figcaption>
                            HTML prototype of the admin (left) and current admin
                            interface (right)
                        </figcaption>
                    </div>
                    <h2>Mobile App</h2>
                    <p>
                        We knew early on that there would be 4 key areas of the
                        app that would cover our use cases:
                    </p>
                    <ul>
                        <li>
                            Share: Talent would find a feed of requests to share
                            official content to their own social media accounts.
                        </li>
                        <li>
                            Make: Talent would be asked to create content that
                            could be used by the official social accounts of
                            their show, and repurposed for marketing assets.
                        </li>
                        <li>
                            Browse: where they would have access to photos,
                            videos and GIFs that they could share and use
                            spontaneously.
                        </li>
                        <li>
                            Chat: for support using the app and anything else.
                        </li>
                    </ul>
                    <p>
                        We also had two priorities in the first phase of
                        design:&#8202;bring familiarity to a new concept, and
                        make the app feel trustworthy, secure, and private.
                    </p>
                    <div className="article-image">
                        <figure>
                            <img
                                src="https://duhg9m9sh0lp8.cloudfront.net/fit-in/2000x0/img/projects/hailto/sketches-2.jpg"
                                alt="cover pupper"
                            />
                        </figure>
                        <figcaption>
                            Early sketches considering what data could be useful
                            in the app, and what familiar components could make
                            sense
                        </figcaption>
                    </div>
                    <p>
                        This led us to begin by experimenting with what existing
                        patterns could be adapted to work for our specific use
                        cases. We used the idea of a feed for share requests,
                        tags for sorting assets, an inbox style layout for make
                        requests and a dark interface to help give the
                        impression of privacy.
                    </p>
                    <div className="article-image">
                        <figure>
                            <img
                                src="https://duhg9m9sh0lp8.cloudfront.net/fit-in/2000x0/img/projects/hailto/early-app-designs.jpg"
                                alt="cover pupper"
                            />
                        </figure>
                        <figcaption>
                            Early designs for the Share and Make sections of the
                            HailTo App
                        </figcaption>
                    </div>
                    <p>
                        Not much remains from these initial designs, as we
                        simplified them to remove a lot of unnecessary clutter.
                        We reduced the number of states used for components to
                        avoid confusion, refined the layout and typography, and
                        improved the information density based on how we thought
                        the app would really be used.
                    </p>
                    <div className="article-image">
                        <figure>
                            <img
                                src="https://duhg9m9sh0lp8.cloudfront.net/fit-in/2000x0/img/projects/hailto/latest-share.jpg"
                                alt="cover pupper"
                            />
                        </figure>
                        <figcaption>Share section and Share details</figcaption>
                    </div>
                    <div className="article-image">
                        <figure>
                            <img
                                src="https://duhg9m9sh0lp8.cloudfront.net/fit-in/2000x0/img/projects/hailto/latest-make.jpg"
                                alt="cover pupper"
                            />
                        </figure>
                        <figcaption>Make section and Make details</figcaption>
                    </div>

                    <h3>Branding and Marketing</h3>
                    <p>
                        This was the most collaborative part of the project
                        among the creative team at Storm Ideas. While I worked
                        on some concepts, colour schemes, typography, and
                        logos&#8202;-&#8202;everyone in the creative team made
                        their mark on the project.
                    </p>
                    <p>
                        One of the key challenges was in clearly communicating
                        the value of HailTo on the marketing website. Initially
                        we used the slogan "Unleash your Talent" and created
                        diagrams to explain the core functionality of the
                        product. This has been continually refined to better
                        show off HailTo.
                    </p>

                    <hr />

                    <h2>Workflow &amp; tools</h2>
                    <p>
                        There was a couple of challenges in the workflow while
                        designing the app.
                    </p>
                    <p>
                        We used HailTo as an opportunity to test out a new
                        design tool, Figma. This had a small learning curve in
                        getting used to the controls after years of using Adobe
                        products&#8202;-&#8202;but the biggest change was in the
                        transparency and collaboration that Figma allows. Design
                        files are accessible by everyone involved in the project
                        by default, and anyone can make changes to them.
                    </p>
                    <p>
                        This was great for allowing us to work towards having a
                        "Single Source of Truth" but in reality it's never that
                        simple. There's a trade off to be made between
                        developing the best solutions as fast as possible and
                        having a perfect, organised and comprehensive design
                        file.
                    </p>

                    <hr />

                    <h2>Production</h2>
                    <h3>Admin Interface</h3>
                    <p>
                        Moving from using{' '}
                        <a
                            href="https://github.com/HosseinKarami/fastshell"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Fastshell
                        </a>{' '}
                        for HTML prototypes to building a React webapp probably
                        best marks the transition between design and production.
                        We're not in the habit of "throwing designs over the
                        wall" to developers, so it was possibly also one of the
                        steepest learning curves of my career. This was the
                        first time I'd seen an arrow function, used ES6, or used
                        React and Webpack&#8202;-&#8202;but after an
                        embarrassingly long time spent tying to work out why I'm
                        staring at a red error screen, we came to a pretty good
                        balance where I could sketch out new React components
                        using the HTML and styles from the prototypes to be
                        connected to real data later.
                    </p>
                    <p>
                        Learning how to work with React also allowed me to make
                        changes to production code without having to create HTML
                        to be handed over and deployed later, speeding up the
                        build process further still.
                    </p>
                    <p>
                        It also allowed us to codify our design decisions, the
                        best example of this is in the form components used
                        throughout the admin interface. Forms are vital in any
                        admin interface, but they're also a solved problem with
                        fairly limited complexity and well understood best
                        practices. We created a collection of React components
                        that make form elements using simple props to speed up
                        the front end build, and guide the developer to create
                        forms with a good UX from the start.
                    </p>
                    <p>
                        For example, we have a variety of components ranging
                        from a generic text input to a phone number input. Each
                        one accepts props for label, placeholder, help text,
                        validation messages, basic layout options and more. Some
                        props are required and many have sensible
                        defaults&#8202;-&#8202;like whether or not it's a
                        required input.
                    </p>
                    <p>
                        These are one good example of a component set up in a
                        way that describes a consistent design system from
                        within the code.
                    </p>

                    <h3>Mobile App</h3>
                    <p>
                        The design and build of the mobile app had far more
                        overlaps. We had to strike a balance between time spent
                        on the admin and keeping development of the app
                        unblocked. We also had to balance what we considered the
                        best implementation of a feature, and what would allow
                        us to build it quickly, eg. where we could use native
                        app controls rather than creating a custom component
                        like a photo picker.
                    </p>
                    <p>
                        Being able to work so closely with our iOS developer to
                        understand the cost of any design decisions allowed us
                        to far better prioritise feature development, and focus
                        design resources on areas that would be the most
                        beneficial to the product.
                    </p>
                    <div className="article-image">
                        <figure>
                            <img
                                src="https://duhg9m9sh0lp8.cloudfront.net/fit-in/2000x0/img/projects/hailto/latest-browse.jpg"
                                alt="cover pupper"
                            />
                        </figure>
                        <figcaption>Designs for the assets section</figcaption>
                    </div>

                    <hr />

                    <h2>Fast Follows</h2>
                    <p>
                        After an initial period of improving reliability and
                        paying off technical debt, it was time for some
                        improvements. We had some ideas for features we wanted
                        to add, and combined this with some initial usage data
                        and user feedback to prioritise some fast follows.
                    </p>
                    <p>
                        It was clear that the Assets section was the most
                        heavily used part of the system, so this was our focus
                        for fast follows. Managing files is, for the most part,
                        a solved problem&#8202;-&#8202;however we have a fairly
                        unique use case providing opportunity for improving and
                        streamlining the experience.
                    </p>
                    <p>
                        One of the first things we noticed was that tags weren't
                        being used. We initially imagined assets being tagged
                        with things like who's in them, what episode and series
                        they were from, where they were taken etc. So, we
                        decided to try automating some organisation by building
                        in facial recognition.
                    </p>
                    <p>
                        Being able to notify Talent when an asset featuring them
                        was uploaded was a feature we wanted to add early on,
                        and was requested by the client. This tied in nicely
                        with the facial recognition so was also prioritised.
                    </p>

                    <hr />

                    <h2>What's next</h2>
                    <p>
                        As with any large, complex product&#8202;-&#8202;there's
                        still room for improvement. One area I feel that I
                        overlooked is in onboarding of the admin interface. Not
                        everyone using it will have had the pitch that the
                        stakeholders had before deciding to use
                        HailTo&#8202;-&#8202;so I think we could do a better job
                        of communicating the value and power of HailTo from
                        within the admin.
                    </p>
                    <p>
                        The app has also grown a lot since designing the current
                        onboarding flows, so a more considered approach to
                        logging in and managing settings could help here too.
                    </p>

                    <hr />

                    <h2>Other considered solutions</h2>
                    <p>
                        I briefly explored the idea to base the app on a chat
                        interface. It occurred to me that much of the user flows
                        could be efficiently completed by using a conversation
                        as the hub of the app. With chat bots and chat based
                        interfaces like Cleo becoming ever more common, this
                        could become a suitable paradigm for interactions with
                        HailTo. I also think that a chat based interface would
                        be very well suited to an app like HailTo with such
                        specific use cases.
                    </p>
                </div>
                <div className="col col-md-3"></div>
            </div>
        </article>
    );
};

export default HailTo;
