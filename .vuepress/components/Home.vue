<template>
    <div class="theme-container bg-gray-100" :class="pageClasses" @touchstart="onTouchStart" @touchend="onTouchEnd">
        <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar" />

        <div class="sidebar-mask" @click="toggleSidebar(false)"></div>

        <Sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar">
            <slot name="sidebar-top" slot="top" />
            <slot name="sidebar-bottom" slot="bottom" />
        </Sidebar>

        <main class="container mx-auto lg:py-12">

            <section class="lg:flex flex-wrap justify-between items-center">

                <div class="lg:w-1/2 lg:pr-4">
                    <h1>Maelstrom CMS Toolkit</h1>

                    <p class="text-lg lg:text-2xl font-bold text-indigo-900 leading-normal">A CMS toolkit for intermediate to advanced development teams who love React, Tailwind & Laravel.</p>

                    <p>Maelstrom is a collection of Laravel and React components to help you flesh out your own control panels using as much of vanilla Laravel as possible.</p>

                    <div class="mt-8 lg:mt-10">

                        <router-link to="/getting-started/" class="block lg:inline-block w-full lg:w-auto text-center lg:text-left bg-indigo-900 text-white hover:bg-indigo-800 py-3 px-5 mr-8 rounded shadow">
                            Documentation
                        </router-link>

                        <a href="https://demo.maelstrom-cms.com" target="_blank" rel="noreferrer noopener" class="block lg:inline-block w-full lg:w-auto text-center lg:text-left mt-6 lg:mt-0 bg-indigo-400 text-white hover:bg-indigo-500 py-3 px-5 rounded">
                            Go to demo
                        </a>

                    </div>
                </div>

                <div class="mt-10 lg:mt-0 lg:w-1/2">
                    <img src="/hero.jpg" alt="Screenshot of Maelstrom in action." class="shadow w-full">
                </div>

            </section>

            <section class="mt-10 lg:mt-12">

                <div class="lg:w-2/3">
                    <h2>Why use Maelstrom?</h2>
                    <p>Unlike other solutions such as Nova - Maelstrom doesn't impose any ways on doing things, we simply provide you various helpers to either use, or ignore - allowing you to implement things exactly as you need. Utilising the IoC container, waterfall includes, extendable UI components and a controversial god class, everything can be changed to suit your needs with ease.</p>

                    <h4>The Stack</h4>
                    <p>Maelstrom uses a cutting edge stack to afford you the ability to create the most advanced systems, unlike many other systems we don't use any Bootstrap themes, it's a pure utility class based interface using <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer noopener">Tailwind</a> and the UI library from <a href="https://ant.design/" target="_blank" rel="noreferrer noopener">Ant Design</a> to allow you to create what ever you need.</p>
                </div>

                <div class="mt-10 lg:mt-12 lg:flex flex-wrap justify-between">
                    <div class="lg:w-1/4 lg:pr-12">
                        <h3 class="flex items-center leading-none">
                            <i class="mr-3"><svg xmlns="http://www.w3.org/2000/svg" style="height: 20px; width: auto;" viewBox="0 0 84.1 57.6"><path fill="#FB503B" d="M83.8 26.9c-.6-.6-8.3-10.3-9.6-11.9-1.4-1.6-2-1.3-2.9-1.2s-10.6 1.8-11.7 1.9c-1.1.2-1.8.6-1.1 1.6.6.9 7 9.9 8.4 12l-25.5 6.1L21.2 1.5c-.8-1.2-1-1.6-2.8-1.5C16.6.1 2.5 1.3 1.5 1.3c-1 .1-2.1.5-1.1 2.9S17.4 41 17.8 42c.4 1 1.6 2.6 4.3 2 2.8-.7 12.4-3.2 17.7-4.6 2.8 5 8.4 15.2 9.5 16.7 1.4 2 2.4 1.6 4.5 1 1.7-.5 26.2-9.3 27.3-9.8 1.1-.5 1.8-.8 1-1.9-.6-.8-7-9.5-10.4-14 2.3-.6 10.6-2.8 11.5-3.1 1-.3 1.2-.8.6-1.4zm-46.3 9.5c-.3.1-14.6 3.5-15.3 3.7-.8.2-.8.1-.8-.2-.2-.3-17-35.1-17.3-35.5-.2-.4-.2-.8 0-.8S17.6 2.4 18 2.4c.5 0 .4.1.6.4 0 0 18.7 32.3 19 32.8.4.5.2.7-.1.8zm40.2 7.5c.2.4.5.6-.3.8-.7.3-24.1 8.2-24.6 8.4-.5.2-.8.3-1.4-.6s-8.2-14-8.2-14L68.1 32c.6-.2.8-.3 1.2.3.4.7 8.2 11.3 8.4 11.6zm1.6-17.6c-.6.1-9.7 2.4-9.7 2.4l-7.5-10.2c-.2-.3-.4-.6.1-.7.5-.1 9-1.6 9.4-1.7.4-.1.7-.2 1.2.5.5.6 6.9 8.8 7.2 9.1.3.3-.1.5-.7.6z"></path></svg></i>
                            <span>Laravel 5.7+</span>
                        </h3>
                        <p class="text-sm">Maelstrom is based on the incredibly developer friendly Laravel, we use as much of vanilla Laravel as possible which means if Laravel allows you to do it, then we allow you to do it. We even use the Mix asset pipeline to allow you the up-most control.</p>
                    </div>

                    <div class="lg:w-1/4 lg:pr-12">
                        <h3 class="flex items-center leading-none">
                            <i class="mr-3"><svg xmlns="http://www.w3.org/2000/svg" style="height: 20px; width: auto;" viewBox="-11.5 -10.232 23 20.463"><circle r="2.05" fill="#61dafb"/><g stroke="#61dafb" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg></i>
                            <span>React 16+</span>
                        </h3>
                        <p class="text-sm">We love Vue, but the React eco-system is beautifully rich, so by opting for React you have access to a plethora of extremely durable libraries, including Ant - and by using the class syntax, everything is easily extendable to make your own modifications.</p>
                    </div>

                    <div class="lg:w-1/4 lg:pr-12">
                        <h3 class="flex items-center leading-none">
                            <i class="mr-3"><svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><linearGradient x1="62.102%" y1="0%" x2="108.197%" y2="37.864%" id="a"><stop stop-color="#4285EB" offset="0%"/><stop stop-color="#2EC7FF" offset="100%"/></linearGradient><linearGradient x1="69.644%" y1="0%" x2="54.043%" y2="108.457%" id="b"><stop stop-color="#29CDFF" offset="0%"/><stop stop-color="#148EFF" offset="37.86%"/><stop stop-color="#0A60FF" offset="100%"/></linearGradient><linearGradient x1="69.691%" y1="-12.974%" x2="16.723%" y2="117.391%" id="c"><stop stop-color="#FA816E" offset="0%"/><stop stop-color="#F74A5C" offset="41.473%"/><stop stop-color="#F51D2C" offset="100%"/></linearGradient><linearGradient x1="68.128%" y1="-35.691%" x2="30.44%" y2="114.943%" id="d"><stop stop-color="#FA8E7D" offset="0%"/><stop stop-color="#F74A5C" offset="51.264%"/><stop stop-color="#F51D2C" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><g fill-rule="nonzero"><path d="M91.588 4.177L4.18 91.513a11.981 11.981 0 0 0 0 16.974l87.408 87.336a12.005 12.005 0 0 0 16.989 0l36.648-36.618c4.209-4.205 4.209-11.023 0-15.228-4.208-4.205-11.031-4.205-15.24 0l-27.783 27.76c-1.17 1.169-2.945 1.169-4.114 0l-69.802-69.744c-1.17-1.169-1.17-2.942 0-4.11l69.802-69.745c1.17-1.169 2.944-1.169 4.114 0l27.783 27.76c4.209 4.205 11.032 4.205 15.24 0 4.209-4.205 4.209-11.022 0-15.227L108.581 4.056c-4.719-4.594-12.312-4.557-16.993.12z" fill="url(#a)"/><path d="M91.588 4.177L4.18 91.513a11.981 11.981 0 0 0 0 16.974l87.408 87.336a12.005 12.005 0 0 0 16.989 0l36.648-36.618c4.209-4.205 4.209-11.023 0-15.228-4.208-4.205-11.031-4.205-15.24 0l-27.783 27.76c-1.17 1.169-2.945 1.169-4.114 0l-69.802-69.744c-1.17-1.169-1.17-2.942 0-4.11l69.802-69.745c2.912-2.51 7.664-7.596 14.642-8.786 5.186-.883 10.855 1.062 17.009 5.837L108.58 4.056c-4.719-4.594-12.312-4.557-16.993.12z" fill="url(#b)"/><path d="M153.686 135.855c4.208 4.205 11.031 4.205 15.24 0l27.034-27.012c4.7-4.696 4.7-12.28 0-16.974l-27.27-27.15c-4.218-4.2-11.043-4.195-15.254.013-4.209 4.205-4.209 11.022 0 15.227l18.418 18.403c1.17 1.169 1.17 2.943 0 4.111l-18.168 18.154c-4.209 4.205-4.209 11.023 0 15.228z" fill="url(#c)"/></g><ellipse fill="url(#d)" cx="100.519" cy="100.437" rx="23.6" ry="23.581"/></g></svg></i>
                            <span>Ant Design</span>
                        </h3>
                        <p class="text-sm">Possible one of the most modern and eye-catching design systems currently available, with a myriad of highly flexible components to build your systems. We use only a handful of their features, however you have access to use them all!</p>
                    </div>

                    <div class="lg:w-1/4 lg:pr-12">
                        <h3 class="flex items-center leading-none">
                            <i class="mr-3"><svg width="34px" height="20px" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="-2.778%" y1="0%" y2="98.765%" id="a"><stop stop-color="#2298BD" offset="0%"/><stop stop-color="#0ED7B5" offset="100%"/></linearGradient></defs><path d="M16.667 0c-4.445 0-7.223 2.222-8.334 6.667 1.667-2.223 3.611-3.056 5.834-2.5 1.268.317 2.174 1.237 3.177 2.255C18.978 8.08 20.869 10 25 10c4.444 0 7.222-2.222 8.333-6.667-1.666 2.223-3.61 3.056-5.833 2.5-1.268-.317-2.174-1.237-3.177-2.255C22.689 1.92 20.798 0 16.667 0zM8.333 10C3.89 10 1.111 12.222 0 16.667c1.667-2.223 3.611-3.056 5.833-2.5 1.268.317 2.174 1.237 3.177 2.255C10.644 18.08 12.536 20 16.667 20c4.444 0 7.222-2.222 8.333-6.667-1.667 2.223-3.611 3.056-5.833 2.5-1.268-.317-2.174-1.237-3.177-2.255C14.356 11.92 12.464 10 8.333 10z" fill="url(#a)" fill-rule="evenodd"/></svg></i>
                            <span>Tailwind</span>
                        </h3>
                        <p class="text-sm">Not forgetting the incredible Tailwind, avoiding the path of themes and going down a utility route, allows you to have the most customised UIs possible, we impose no design restrictions on you, letting you write as much or as little code as you like.</p>
                    </div>
                </div>


            </section>

        </main>

        <div class="bg-white py-8">
            <div class="container mx-auto">

                <section class="lg:w-2/3">
                    <h2>Features</h2>

                    <p>Before Maelstrom existed, we'd experienced a whole range of systems, finding what was good, what was bad, and now we've stolen them and put them all together, creating a library of features to make your development process and user experience as smooth as possible. <span class="text-xs italic">(That's right, we even have breadcrumbs - Looking at you Nova!)</span></p>

                    <p>Below is a list of just some of our bundled functionality - See our <router-link to="/getting-started/">documentation</router-link> for a full list and our ~30 field types.</p>
                </section>

                <div class="lg:flex flex-wrap mt-10">
                    <div v-for="f in features" class="lg:w-1/4 flex mb-4 lg:mb-2">
                        <i class="mr-2"><svg viewBox="64 64 896 896" class="" data-icon="check-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" fill="#1890ff"></path><path fill="#e6f7ff" d="M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm193.4 225.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.3 0 19.9 5 25.9 13.3l71.2 98.8 157.2-218c6-8.4 15.7-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.4 12.7z"></path><path fill="#1890ff" d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></i>
                        <span class="lg:text-sm">{{ f }}</span>
                    </div>
                </div>

                <section class="mt-10">
                    <h2 class="lg:w-2/3">How easy is it?</h2>

                    <div class="lg:w-2/3">
                        <p>Creating a panel is incredibly straight forward, you just need the normal set of components, e.g. a route, a controller, a model and some templates.</p>
                    </div>

                    <div>
                        <p>We've even created a short video series walking you through creating a backend for your own blog.</p>

                        <h3>Videos</h3>

                        <div class="mt-10 flex flex-wrap text-center">

                            <div class="w-1/2 md:w-1/5 pr-5 md:pr-20 mb-5 md:mb-0">
                                <a target="_blank" rel="noreferrer noopener" href="https://www.youtube.com/watch?v=xr9c_4uVvsc">
                                    <img class="w-full h-auto rounded-lg" src="https://i.ytimg.com/vi/xr9c_4uVvsc/hqdefault.jpg" alt="Watch Part 1 Thumbnail">
                                    <span class="mt-3 inline-block">Getting Started</span>
                                </a>
                            </div>

                            <div class="w-1/2 md:w-1/5 pr-5 md:pr-20 mb-5">
                                <a target="_blank" rel="noreferrer noopener" href="https://www.youtube.com/watch?v=bwOZrAcSsCQ">
                                    <img class="w-full h-auto rounded-lg" src="https://i.ytimg.com/vi/bwOZrAcSsCQ/hqdefault.jpg" alt="Watch Part 2 Thumbnail">
                                    <span class="mt-3 inline-block">Categories Panel</span>
                                </a>
                            </div>

                            <div class="w-1/2 md:w-1/5 pr-5 md:pr-20 mb-5">
                                <a target="_blank" rel="noreferrer noopener" href="https://www.youtube.com/watch?v=c3j_3LUeEQI">
                                    <img class="w-full h-auto rounded-lg" src="https://i.ytimg.com/vi/c3j_3LUeEQI/hqdefault.jpg" alt="Watch Part 3 Thumbnail">
                                    <span class="mt-3 inline-block">Posts Panel</span>
                                </a>
                            </div>

                            <div class="w-1/2 md:w-1/5 pr-5 md:pr-20 mb-5">
                                <a target="_blank" rel="noreferrer noopener" href="https://www.youtube.com/watch?v=A07xlbzrbvc">
                                    <img class="w-full h-auto rounded-lg" src="https://i.ytimg.com/vi/A07xlbzrbvc/hqdefault.jpg" alt="Watch Part 4 Thumbnail">
                                    <span class="mt-3 inline-block">Adding a Sidebar</span>
                                </a>
                            </div>

                            <div class="w-1/2 md:w-1/5 pr-5 md:pr-20 mb-5">
                                <a target="_blank" rel="noreferrer noopener" href="https://www.youtube.com/watch?v=4BdcC9eQcDY">
                                    <img class="w-full h-auto rounded-lg" src="https://i.ytimg.com/vi/4BdcC9eQcDY/hqdefault.jpg" alt="Watch Part 5 Thumbnail">
                                    <span class="mt-3 inline-block">Adding Filters</span>
                                </a>
                            </div>


                        </div>

                    </div>

                    <div class="mt-10 md:mt-20 lg:w-2/3">
                        <p>Below you can also see a bare minimal example of what this might look like below.</p>
                    </div>

                    <div class="lg:flex flex-wrap">
                        <div class="lg:w-1/2">
                            <h3>Code:</h3>

                            <Content class="theme-default-content custom"/>
                        </div>
                        <div class="lg:w-1/2 lg:px-6">
                            <h3>Browser:</h3>

                            <div>
                                <img class="w-full shadow" src="/index-preview.jpg" alt="Preview of the resource index.">
                            </div>

                            <div class="mt-6">
                                <img class="w-full shadow" src="/form-preview.jpg" alt="Preview of a form.">
                            </div>
                        </div>
                    </div>

                </section>

                <section class="py-10 lg:w-2/3">
                    <h2>Pricing</h2>
                    <p>This all sounds great, but how much does it cost?</p>
                    <p>Technically nothing, all the source code is open-source and can be used commercially for free. However we would appreciate any donations to help support the on-going maintenance of the toolkit - so you can pay however much you feel we deserve.</p>
                    <a class="mt-4 gumroad-button" href="https://gum.co/maelstrom" target="_blank">Pay what you want.</a>
                </section>

                <section>
                    <h2>Support</h2>
                    <ul>
                        <li><a href="https://github.com/maelstrom-cms/toolkit/issues/new?assignees=OwenMelbz&amp;labels=bug%2C+triage&amp;template=bug_report.md&amp;title=%5BBug%5D+">Report Bug</a></li>
                        <li><a href="https://github.com/maelstrom-cms/toolkit/issues/new?assignees=OwenMelbz&amp;labels=question&amp;template=question.md&amp;title=%5BQuestion%5D+">Ask a Question</a></li>
                        <li><a href="mailto:talk@maelstrom-cms.com">Email Us</a></li>
                    </ul>
                </section>

            </div>
        </div>

        <div class="container pb-8 lg:hidden">
            <router-link to="/getting-started/" class="block lg:inline-block w-full lg:w-auto text-center lg:text-left bg-indigo-900 text-white hover:bg-indigo-800 py-3 px-5 mr-8 rounded shadow">
                Documentation
            </router-link>

            <a href="https://demo.maelstrom-cms.com" target="_blank" rel="noreferrer noopener" class="block lg:inline-block w-full lg:w-auto text-center lg:text-left mt-6 lg:mt-0 bg-indigo-400 text-white hover:bg-indigo-500 py-3 px-5 rounded">
                Go to demo
            </a>
        </div>
    </div>
</template>

<script>
import Layout from '@vuepress/theme-default/layouts/Layout'

export default {
    mixins: [ Layout ],
    mounted() {
        const script = document.createElement('script')
        script.setAttribute('src', 'https://gumroad.com/js/gumroad.js')
        document.head.appendChild(script)
    },
    data: () => ({
        features: [
            'Media Manager',
            'Tabbed Forms',
            'Repeatable Inputs',
            'Nested Resources',
            'Sidebar Manager',
            'Flash Messages',
            'Breadcrumbs',
            'Validation',
            'Colour Pickers',
            'Date / Time Pickers',
            'File / Image Uploaders',
            'Markdown and Wysiwyg',
            'Video Fields',
            'Tagging Inputs',
            'Selects and Multi-Selects',
            'Randomisers',
            'Ratings',
            'Radio Buttons w/ Visibility Toggle',
            'Algolia Places',
            'Toggles / Switches',
            'Edit Account Page',
            'Trash and Soft Deletes',
            'Filters and Searches',
            'Bulk Actions'
        ],
    })
}
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>

<style scoped>
    .theme-container {
        padding-top: 3.6rem;
    }

    .container {
        padding-left: 20px;
        padding-right: 20px;
    }

    a,
    div,
    main,
    section {
        box-sizing: border-box;
    }

    @media(min-width: 720px) {
        .sidebar {
            display: none;
        }
    }
</style>
