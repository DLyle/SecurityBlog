


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=10">
        <title>backbone/backbone.js at master · amdjs/backbone</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="github-fe135-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 1.9.3p194-tcs-github-tcmalloc (e1c0c3f392) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="62D84134:6DAB:268D3C7:52AB7192" name="octolytics-dimension-request_id" /><meta content="2495614" name="octolytics-actor-id" /><meta content="DLyle" name="octolytics-actor-login" /><meta content="3b3197ef32d93f68863e5daa1461aa422eb65cdf719eaf167302f5e9b9e67e6c" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="srzqwvP0vLcFNhUK/ZpdTn/FweAtBGeEmmebb7wHDHw=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-aa3aa5ee0b47eb1e117167bf22f7f950b28f9e9e.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-98f63b564391a129b3831e14a1234840a890cc4a.css" media="all" rel="stylesheet" type="text/css" />
    

    

      <script src="https://github.global.ssl.fastly.net/assets/frameworks-5970f5a0a3dcc441d5f7ff74326ffd59bbe9388e.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-0b198634289a620940540888409ffb14ee6c667f.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="3fb5acd89331b8412a65215fc08c9ec5">

        <link data-pjax-transient rel='permalink' href='/amdjs/backbone/blob/47e136947fc97c2f21f24aa339271194c6143dc4/backbone.js'>
  <meta property="og:title" content="backbone"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/amdjs/backbone"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="AMD-enabled fork of documentcloud/backbone"/>

  <meta name="description" content="AMD-enabled fork of documentcloud/backbone" />

  <meta content="794713" name="octolytics-dimension-user_id" /><meta content="amdjs" name="octolytics-dimension-user_login" /><meta content="3167605" name="octolytics-dimension-repository_id" /><meta content="amdjs/backbone" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="true" name="octolytics-dimension-repository_is_fork" /><meta content="952189" name="octolytics-dimension-repository_parent_id" /><meta content="jashkenas/backbone" name="octolytics-dimension-repository_parent_nwo" /><meta content="952189" name="octolytics-dimension-repository_network_root_id" /><meta content="jashkenas/backbone" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/amdjs/backbone/commits/master.atom" rel="alternate" title="Recent Commits to backbone:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production linux vis-public fork page-blob">
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" class="notification-indicator tooltipped downwards" data-gotokey="n" title="You have no unread notifications">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="DLyle"
      data-repo="amdjs/backbone"
      data-branch="master"
      data-sha="6c83d58e12b08afcf15e2f3be1252f4f30cc9434"
  >

    <input type="hidden" name="nwo" value="amdjs/backbone" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/DLyle" class="name">
        <img height="20" src="https://0.gravatar.com/avatar/78ab796250dc1b1acff58d37354c10cd?d=https%3A%2F%2Fidenticons.github.com%2F74d6bb0d2525efcd033b0ea35b7dcc52.png&amp;r=x&amp;s=140" width="20" /> DLyle
      </a>
    </li>

      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo" aria-label="Create a new repo">
          <span class="octicon octicon-repo-create"></span>
        </a>
      </li>

      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          aria-label="Account settings "
          title="Account settings ">
          <span class="octicon octicon-tools"></span>
        </a>
      </li>
      <li>
        <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out" aria-label="Sign out">
          <span class="octicon octicon-log-out"></span>
        </a>
      </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>



    <li class="section-title">
      <span title="amdjs/backbone">This repository</span>
    </li>
      <li>
        <a href="/amdjs/backbone/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

      




          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="srzqwvP0vLcFNhUK/ZpdTn/FweAtBGeEmmebb7wHDHw=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="3167605" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/amdjs/backbone/watchers">
        82
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  

  <div class="js-toggler-container js-social-container starring-container ">
    <a href="/amdjs/backbone/unstar"
      class="minibutton with-count js-toggler-target star-button starred upwards"
      title="Unstar this repository" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
    </a>

    <a href="/amdjs/backbone/star"
      class="minibutton with-count js-toggler-target star-button unstarred upwards"
      title="Star this repository" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star"></span><span class="text">Star</span>
    </a>

      <a class="social-count js-social-count" href="/amdjs/backbone/stargazers">
        664
      </a>
  </div>

  </li>


        <li>
          <a href="/amdjs/backbone/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="facebox nofollow">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/amdjs/backbone/network" class="social-count">3,536</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo-forked"></span>
          <span class="author">
            <a href="/amdjs" class="url fn" itemprop="url" rel="author"><span itemprop="title">amdjs</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/amdjs/backbone" class="js-current-repository js-repo-home-link">backbone</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

            <span class="fork-flag">
              <span class="text">forked from <a href="/jashkenas/backbone">jashkenas/backbone</a></span>
            </span>
        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container  ">

        <div class="repository-sidebar">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped leftwards" title="Code">
        <a href="/amdjs/backbone" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /amdjs/backbone">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/amdjs/backbone/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /amdjs/backbone/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>1</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests">
        <a href="/amdjs/backbone/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /amdjs/backbone/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped leftwards" title="Wiki">
          <a href="/amdjs/backbone/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_wiki /amdjs/backbone/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/amdjs/backbone/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /amdjs/backbone/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/amdjs/backbone/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /amdjs/backbone/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/amdjs/backbone/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /amdjs/backbone/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/amdjs/backbone.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/amdjs/backbone.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:amdjs/backbone.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:amdjs/backbone.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/amdjs/backbone" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/amdjs/backbone" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="octicon help tooltipped upwards" title="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>



              <a href="/amdjs/backbone/archive/master.zip"
                 class="minibutton sidebar-button"
                 title="Download this repository as a zip file"
                 rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:a64fc226e04dbad33c13885136e329fd -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/amdjs/backbone/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/blob/gh-pages/backbone.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/blob/master/backbone.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/tree/1.1.0/backbone.js"
                 data-name="1.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.1.0">1.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/tree/1.0.0/backbone.js"
                 data-name="1.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.0.0">1.0.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/tree/0.9.10/backbone.js"
                 data-name="0.9.10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.9.10">0.9.10</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/tree/0.9.9/backbone.js"
                 data-name="0.9.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.9.9">0.9.9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/tree/0.9.2/backbone.js"
                 data-name="0.9.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.9.2">0.9.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/tree/0.9.1/backbone.js"
                 data-name="0.9.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.9.1">0.9.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/tree/0.9.0/backbone.js"
                 data-name="0.9.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.9.0">0.9.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/tree/0.5.3/backbone.js"
                 data-name="0.5.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.5.3">0.5.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/tree/0.5.2/backbone.js"
                 data-name="0.5.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.5.2">0.5.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/tree/0.5.1/backbone.js"
                 data-name="0.5.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.5.1">0.5.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/tree/0.5.0/backbone.js"
                 data-name="0.5.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.5.0">0.5.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/tree/0.3.3/backbone.js"
                 data-name="0.3.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.3.3">0.3.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/tree/0.3.2/backbone.js"
                 data-name="0.3.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.3.2">0.3.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/tree/0.3.1/backbone.js"
                 data-name="0.3.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.3.1">0.3.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/tree/0.3.0/backbone.js"
                 data-name="0.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.3.0">0.3.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/tree/0.2.0/backbone.js"
                 data-name="0.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.2.0">0.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/tree/0.1.2/backbone.js"
                 data-name="0.1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.1.2">0.1.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/tree/0.1.1/backbone.js"
                 data-name="0.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.1.1">0.1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/tree/0.1.0/backbone.js"
                 data-name="0.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.1.0">0.1.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/amdjs/backbone" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">backbone</span></a></span></span><span class="separator"> / </span><strong class="final-path">backbone.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="backbone.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>



  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://0.gravatar.com/avatar/00ac28bdce61e7db41be57fb3b7f3525?d=https%3A%2F%2Fidenticons.github.com%2F880ab8e3c71a97059c86d7664216bdf3.png&amp;r=x&amp;s=140" width="24" />
    <span class="author"><a href="/jrburke" rel="author">jrburke</a></span>
    <time class="js-relative-date" datetime="2013-10-15T22:47:34-07:00" title="2013-10-15 22:47:34">October 15, 2013</time>
    <div class="commit-title">
        <a href="/amdjs/backbone/commit/47e136947fc97c2f21f24aa339271194c6143dc4" class="message" data-pjax="true" title="Merge tag &#39;1.1.0&#39; of git://github.com/documentcloud/backbone

Conflicts:
	backbone-min.js
	backbone-min.map">Merge tag '1.1.0' of git://github.com/documentcloud/backbone</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>147</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="jashkenas" href="/amdjs/backbone/commits/master/backbone.js?author=jashkenas"><img height="20" src="https://0.gravatar.com/avatar/32652ed5b8fbd2ecdb1c78e9ac567b4b?d=https%3A%2F%2Fidenticons.github.com%2Ffd1d83de2517a02d4e221ede9a681432.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="braddunbar" href="/amdjs/backbone/commits/master/backbone.js?author=braddunbar"><img height="20" src="https://0.gravatar.com/avatar/0168f51cd822a820c606c259b80e253f?d=https%3A%2F%2Fidenticons.github.com%2Ffc50322932b29b26cfc46fd9a91ec474.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="caseywebdev" href="/amdjs/backbone/commits/master/backbone.js?author=caseywebdev"><img height="20" src="https://1.gravatar.com/avatar/ca34681a45aff25c58c7c5ce9a8b0a32?d=https%3A%2F%2Fidenticons.github.com%2F41811b33495d114f2a7687f123b64d20.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="tgriesser" href="/amdjs/backbone/commits/master/backbone.js?author=tgriesser"><img height="20" src="https://2.gravatar.com/avatar/fb5d018725ccbe7c4359e29edddb201d?d=https%3A%2F%2Fidenticons.github.com%2F2d6b98b1665c939f8acce7bef72c2d13.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="akre54" href="/amdjs/backbone/commits/master/backbone.js?author=akre54"><img height="20" src="https://1.gravatar.com/avatar/cdebe55961ee3852f4bb72c0d03e0df5?d=https%3A%2F%2Fidenticons.github.com%2Fe9cd34600c54a2dfcdbf441ea4c3be5a.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="gsamokovarov" href="/amdjs/backbone/commits/master/backbone.js?author=gsamokovarov"><img height="20" src="https://1.gravatar.com/avatar/1ac5a00efa41cd58c421d3cd98dda7b9?d=https%3A%2F%2Fidenticons.github.com%2F7db396598dab824c7e0c5dc38557aa7d.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="jrburke" href="/amdjs/backbone/commits/master/backbone.js?author=jrburke"><img height="20" src="https://0.gravatar.com/avatar/00ac28bdce61e7db41be57fb3b7f3525?d=https%3A%2F%2Fidenticons.github.com%2F880ab8e3c71a97059c86d7664216bdf3.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="krawaller" href="/amdjs/backbone/commits/master/backbone.js?author=krawaller"><img height="20" src="https://2.gravatar.com/avatar/3d0b6818545a16b0ed7521b56a6efe2e?d=https%3A%2F%2Fidenticons.github.com%2F0661b09a2df99afc4de5bb2d85838827.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="samuelclay" href="/amdjs/backbone/commits/master/backbone.js?author=samuelclay"><img height="20" src="https://1.gravatar.com/avatar/623aae0b4533bc1db9ecc20fe9ea4912?d=https%3A%2F%2Fidenticons.github.com%2Fbc194b9ebff98250f975040b7d0275ce.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="wookiehangover" href="/amdjs/backbone/commits/master/backbone.js?author=wookiehangover"><img height="20" src="https://2.gravatar.com/avatar/fdc587e5edec6ba881d9cb93cbe72c7b?d=https%3A%2F%2Fidenticons.github.com%2F8aab28fba287f0da0e98c85e0a9416c5.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="tbranyen" href="/amdjs/backbone/commits/master/backbone.js?author=tbranyen"><img height="20" src="https://0.gravatar.com/avatar/21dbcdbf46f8ee3774c1b9b3efadfa9e?d=https%3A%2F%2Fidenticons.github.com%2F8a1fce3ba4e3b6c59f8edad65c9e8e2f.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="iros" href="/amdjs/backbone/commits/master/backbone.js?author=iros"><img height="20" src="https://1.gravatar.com/avatar/f99c66cc9f64454df105006286d47521?d=https%3A%2F%2Fidenticons.github.com%2Fa71d605a4f814847ac5b0d96f11ee444.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="thejefflarson" href="/amdjs/backbone/commits/master/backbone.js?author=thejefflarson"><img height="20" src="https://2.gravatar.com/avatar/ad799d71d3074d1e2e5fe37e6c73d624?d=https%3A%2F%2Fidenticons.github.com%2F5edc987d7d6b3bb2ca34eba15995814d.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="derickbailey" href="/amdjs/backbone/commits/master/backbone.js?author=derickbailey"><img height="20" src="https://0.gravatar.com/avatar/e592bd1326b1e80188ed4c0bf26b9f75?d=https%3A%2F%2Fidenticons.github.com%2Fc551b3e48358cd66c83315c5a357cc69.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="andrewschaaf" href="/amdjs/backbone/commits/master/backbone.js?author=andrewschaaf"><img height="20" src="https://1.gravatar.com/avatar/44d893fd199a738af87be86b792ac794?d=https%3A%2F%2Fidenticons.github.com%2F3cff8e6cde4b5c40f89aced3769e6215.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="alexgraul" href="/amdjs/backbone/commits/master/backbone.js?author=alexgraul"><img height="20" src="https://0.gravatar.com/avatar/90aba12c2123d706d7101c226fad2cb0?d=https%3A%2F%2Fidenticons.github.com%2Fffc87aa6d02f68087d1978176980b783.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="sstephenson" href="/amdjs/backbone/commits/master/backbone.js?author=sstephenson"><img height="20" src="https://0.gravatar.com/avatar/5b9fe87ec1faa67a4599782930f45ec9?d=https%3A%2F%2Fidenticons.github.com%2F92f54963fc39a9d87c2253186808ea61.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="aeosynth" href="/amdjs/backbone/commits/master/backbone.js?author=aeosynth"><img height="20" src="https://2.gravatar.com/avatar/65bdf2442092d6c9c5ade711913317d5?d=https%3A%2F%2Fidenticons.github.com%2F8e410842f37e68e4019bde0eb9242246.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="tomasztunik" href="/amdjs/backbone/commits/master/backbone.js?author=tomasztunik"><img height="20" src="https://0.gravatar.com/avatar/d950a86d379de01881463ee00f6b8162?d=https%3A%2F%2Fidenticons.github.com%2Fdbfea7bdc98b1cf4e5de5010d97f36cd.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="rsim" href="/amdjs/backbone/commits/master/backbone.js?author=rsim"><img height="20" src="https://0.gravatar.com/avatar/634c7a5c6e7c5e50b431632c7d3b2d92?d=https%3A%2F%2Fidenticons.github.com%2F8df6a65941e4c9da40a4fb899de65c55.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="johtso" href="/amdjs/backbone/commits/master/backbone.js?author=johtso"><img height="20" src="https://0.gravatar.com/avatar/7a4c9c27464b01e2ca6bdc14c586b979?d=https%3A%2F%2Fidenticons.github.com%2F32a03e32d6668b018fceaffcaf7dfcf1.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="adriaanlabusc" href="/amdjs/backbone/commits/master/backbone.js?author=adriaanlabusc"><img height="20" src="https://0.gravatar.com/avatar/f15ea8624f784dfd686536f53bf747a2?d=https%3A%2F%2Fidenticons.github.com%2F48a74284f1de0a9ae3dc92a78c0c7976.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="aterris" href="/amdjs/backbone/commits/master/backbone.js?author=aterris"><img height="20" src="https://0.gravatar.com/avatar/df5702df61888046b35a4313fc4d4cdb?d=https%3A%2F%2Fidenticons.github.com%2F8df77cb5af3d82dd87c821b572807502.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="hippich" href="/amdjs/backbone/commits/master/backbone.js?author=hippich"><img height="20" src="https://0.gravatar.com/avatar/95c2bba6f0d837dc34c5b3632ce6032d?d=https%3A%2F%2Fidenticons.github.com%2F918060e41cceb36ed1c1566c83ab07bc.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="runemadsen" href="/amdjs/backbone/commits/master/backbone.js?author=runemadsen"><img height="20" src="https://1.gravatar.com/avatar/63682d2534602863b9b8277edcff374c?d=https%3A%2F%2Fidenticons.github.com%2F56df9cd706fc1255c907b7c7c4bd9d85.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="jsanders" href="/amdjs/backbone/commits/master/backbone.js?author=jsanders"><img height="20" src="https://1.gravatar.com/avatar/31c4a590d4c752f53038d786516c4c74?d=https%3A%2F%2Fidenticons.github.com%2Fd6dee97af59164b2d3a186e03d8ebdf0.png&amp;r=x&amp;s=140" width="20" /></a>

      <a href="#blob_contributors_box" rel="facebox" class="others-text">and others.</a>

    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/32652ed5b8fbd2ecdb1c78e9ac567b4b?d=https%3A%2F%2Fidenticons.github.com%2Ffd1d83de2517a02d4e221ede9a681432.png&amp;r=x&amp;s=140" width="24" />
            <a href="/jashkenas">jashkenas</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/0168f51cd822a820c606c259b80e253f?d=https%3A%2F%2Fidenticons.github.com%2Ffc50322932b29b26cfc46fd9a91ec474.png&amp;r=x&amp;s=140" width="24" />
            <a href="/braddunbar">braddunbar</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/ca34681a45aff25c58c7c5ce9a8b0a32?d=https%3A%2F%2Fidenticons.github.com%2F41811b33495d114f2a7687f123b64d20.png&amp;r=x&amp;s=140" width="24" />
            <a href="/caseywebdev">caseywebdev</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/fb5d018725ccbe7c4359e29edddb201d?d=https%3A%2F%2Fidenticons.github.com%2F2d6b98b1665c939f8acce7bef72c2d13.png&amp;r=x&amp;s=140" width="24" />
            <a href="/tgriesser">tgriesser</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/cdebe55961ee3852f4bb72c0d03e0df5?d=https%3A%2F%2Fidenticons.github.com%2Fe9cd34600c54a2dfcdbf441ea4c3be5a.png&amp;r=x&amp;s=140" width="24" />
            <a href="/akre54">akre54</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/1ac5a00efa41cd58c421d3cd98dda7b9?d=https%3A%2F%2Fidenticons.github.com%2F7db396598dab824c7e0c5dc38557aa7d.png&amp;r=x&amp;s=140" width="24" />
            <a href="/gsamokovarov">gsamokovarov</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/00ac28bdce61e7db41be57fb3b7f3525?d=https%3A%2F%2Fidenticons.github.com%2F880ab8e3c71a97059c86d7664216bdf3.png&amp;r=x&amp;s=140" width="24" />
            <a href="/jrburke">jrburke</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/3d0b6818545a16b0ed7521b56a6efe2e?d=https%3A%2F%2Fidenticons.github.com%2F0661b09a2df99afc4de5bb2d85838827.png&amp;r=x&amp;s=140" width="24" />
            <a href="/krawaller">krawaller</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/623aae0b4533bc1db9ecc20fe9ea4912?d=https%3A%2F%2Fidenticons.github.com%2Fbc194b9ebff98250f975040b7d0275ce.png&amp;r=x&amp;s=140" width="24" />
            <a href="/samuelclay">samuelclay</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/fdc587e5edec6ba881d9cb93cbe72c7b?d=https%3A%2F%2Fidenticons.github.com%2F8aab28fba287f0da0e98c85e0a9416c5.png&amp;r=x&amp;s=140" width="24" />
            <a href="/wookiehangover">wookiehangover</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/21dbcdbf46f8ee3774c1b9b3efadfa9e?d=https%3A%2F%2Fidenticons.github.com%2F8a1fce3ba4e3b6c59f8edad65c9e8e2f.png&amp;r=x&amp;s=140" width="24" />
            <a href="/tbranyen">tbranyen</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/f99c66cc9f64454df105006286d47521?d=https%3A%2F%2Fidenticons.github.com%2Fa71d605a4f814847ac5b0d96f11ee444.png&amp;r=x&amp;s=140" width="24" />
            <a href="/iros">iros</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/ad799d71d3074d1e2e5fe37e6c73d624?d=https%3A%2F%2Fidenticons.github.com%2F5edc987d7d6b3bb2ca34eba15995814d.png&amp;r=x&amp;s=140" width="24" />
            <a href="/thejefflarson">thejefflarson</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/e592bd1326b1e80188ed4c0bf26b9f75?d=https%3A%2F%2Fidenticons.github.com%2Fc551b3e48358cd66c83315c5a357cc69.png&amp;r=x&amp;s=140" width="24" />
            <a href="/derickbailey">derickbailey</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/44d893fd199a738af87be86b792ac794?d=https%3A%2F%2Fidenticons.github.com%2F3cff8e6cde4b5c40f89aced3769e6215.png&amp;r=x&amp;s=140" width="24" />
            <a href="/andrewschaaf">andrewschaaf</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/90aba12c2123d706d7101c226fad2cb0?d=https%3A%2F%2Fidenticons.github.com%2Fffc87aa6d02f68087d1978176980b783.png&amp;r=x&amp;s=140" width="24" />
            <a href="/alexgraul">alexgraul</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/5b9fe87ec1faa67a4599782930f45ec9?d=https%3A%2F%2Fidenticons.github.com%2F92f54963fc39a9d87c2253186808ea61.png&amp;r=x&amp;s=140" width="24" />
            <a href="/sstephenson">sstephenson</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/65bdf2442092d6c9c5ade711913317d5?d=https%3A%2F%2Fidenticons.github.com%2F8e410842f37e68e4019bde0eb9242246.png&amp;r=x&amp;s=140" width="24" />
            <a href="/aeosynth">aeosynth</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/d950a86d379de01881463ee00f6b8162?d=https%3A%2F%2Fidenticons.github.com%2Fdbfea7bdc98b1cf4e5de5010d97f36cd.png&amp;r=x&amp;s=140" width="24" />
            <a href="/tomasztunik">tomasztunik</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/634c7a5c6e7c5e50b431632c7d3b2d92?d=https%3A%2F%2Fidenticons.github.com%2F8df6a65941e4c9da40a4fb899de65c55.png&amp;r=x&amp;s=140" width="24" />
            <a href="/rsim">rsim</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/7a4c9c27464b01e2ca6bdc14c586b979?d=https%3A%2F%2Fidenticons.github.com%2F32a03e32d6668b018fceaffcaf7dfcf1.png&amp;r=x&amp;s=140" width="24" />
            <a href="/johtso">johtso</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/f15ea8624f784dfd686536f53bf747a2?d=https%3A%2F%2Fidenticons.github.com%2F48a74284f1de0a9ae3dc92a78c0c7976.png&amp;r=x&amp;s=140" width="24" />
            <a href="/adriaanlabusc">adriaanlabusc</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/df5702df61888046b35a4313fc4d4cdb?d=https%3A%2F%2Fidenticons.github.com%2F8df77cb5af3d82dd87c821b572807502.png&amp;r=x&amp;s=140" width="24" />
            <a href="/aterris">aterris</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/95c2bba6f0d837dc34c5b3632ce6032d?d=https%3A%2F%2Fidenticons.github.com%2F918060e41cceb36ed1c1566c83ab07bc.png&amp;r=x&amp;s=140" width="24" />
            <a href="/hippich">hippich</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/63682d2534602863b9b8277edcff374c?d=https%3A%2F%2Fidenticons.github.com%2F56df9cd706fc1255c907b7c7c4bd9d85.png&amp;r=x&amp;s=140" width="24" />
            <a href="/runemadsen">runemadsen</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/31c4a590d4c752f53038d786516c4c74?d=https%3A%2F%2Fidenticons.github.com%2Fd6dee97af59164b2d3a186e03d8ebdf0.png&amp;r=x&amp;s=140" width="24" />
            <a href="/jsanders">jsanders</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/4caa72710e19ad78ab1151d908483567?d=https%3A%2F%2Fidenticons.github.com%2F22e0ddab049d18f4865ed5d67db92bd2.png&amp;r=x&amp;s=140" width="24" />
            <a href="/ekratskih">ekratskih</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/ace839b3ca5956c302997d379af86c7a?d=https%3A%2F%2Fidenticons.github.com%2F82ae4db7df1289268b48bebcbfa1b950.png&amp;r=x&amp;s=140" width="24" />
            <a href="/felixhorro">felixhorro</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/6868c2908859c318f4fa0911eb6029b0?d=https%3A%2F%2Fidenticons.github.com%2Fcdd8f56f9a5f73b49a0d0b3f64658fde.png&amp;r=x&amp;s=140" width="24" />
            <a href="/dcneiner">dcneiner</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/6766096e8ae81ad6b3b82b9c12be19e0?d=https%3A%2F%2Fidenticons.github.com%2F4d04a1548bf674def3e1ff12e245179f.png&amp;r=x&amp;s=140" width="24" />
            <a href="/fitzgen">fitzgen</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/5cf481ac043b5ca0ea05ccdd70e677b2?d=https%3A%2F%2Fidenticons.github.com%2Fd0e4286460fe6219bb57b61bf41a9f5c.png&amp;r=x&amp;s=140" width="24" />
            <a href="/keithamus">keithamus</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/3562fd5a7b881205bbdb9b2001c9f87d?d=https%3A%2F%2Fidenticons.github.com%2Fe9cd778b96792f98eb60bab353136257.png&amp;r=x&amp;s=140" width="24" />
            <a href="/DreamTheater">DreamTheater</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/e7f4e4b1d3b381e70f864bc7f8b4493e?d=https%3A%2F%2Fidenticons.github.com%2F5dcbc52fc2767f1278f5a0970d150615.png&amp;r=x&amp;s=140" width="24" />
            <a href="/ianstormtaylor">ianstormtaylor</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/8ef9f16948a30b569750a3a4dd76b2ca?d=https%3A%2F%2Fidenticons.github.com%2F750ffdbacab028897aaff877d3c82196.png&amp;r=x&amp;s=140" width="24" />
            <a href="/asan">asan</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/1ed56a3c8445bfafc7a545d9a63175ce?d=https%3A%2F%2Fidenticons.github.com%2F58a2fc6ed39fd083f55d4182bf88826d.png&amp;r=x&amp;s=140" width="24" />
            <a href="/knowtheory">knowtheory</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/7b10f2c3987ecd9d95005ec616fb93b2?d=https%3A%2F%2Fidenticons.github.com%2F9beb7bd3164898c7504e48beef9095f6.png&amp;r=x&amp;s=140" width="24" />
            <a href="/jrolfs">jrolfs</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/63f259ca39670e260cd50dd71013663c?d=https%3A%2F%2Fidenticons.github.com%2Fcedebb6e872f539bef8c3f919874e9d7.png&amp;r=x&amp;s=140" width="24" />
            <a href="/timcharper">timcharper</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/f9dd9f4c2b8d081b67fe34769e24808e?d=https%3A%2F%2Fidenticons.github.com%2F3e1e19f4445b3d8bf303f4771e6973e6.png&amp;r=x&amp;s=140" width="24" />
            <a href="/jasondavies">jasondavies</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/e7daec2f9052c7c1690422d0d74c3b7d?d=https%3A%2F%2Fidenticons.github.com%2F490e2819b183440ff0baf248f186d608.png&amp;r=x&amp;s=140" width="24" />
            <a href="/JoeGermuska">JoeGermuska</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/2922f1fa46e9ca9b70eee958ddcc1704?d=https%3A%2F%2Fidenticons.github.com%2Ff1ff9c2aa98e72021c5c5236b96b128d.png&amp;r=x&amp;s=140" width="24" />
            <a href="/shesek">shesek</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/97e29ccac35f946650ecc9a67710fe07?d=https%3A%2F%2Fidenticons.github.com%2F6495633a40047fac6711eae284449f15.png&amp;r=x&amp;s=140" width="24" />
            <a href="/chris-baynes">chris-baynes</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/920e96e39bf30400e9bc7c4a92b1bf00?d=https%3A%2F%2Fidenticons.github.com%2F2000f6325dfc4fc3201fc45ed01c7a5d.png&amp;r=x&amp;s=140" width="24" />
            <a href="/mrjjwright">mrjjwright</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/bbe5dc8dcf248706525ab76f46185520?d=https%3A%2F%2Fidenticons.github.com%2F3988c7f88ebcb58c6ce932b957b6f332.png&amp;r=x&amp;s=140" width="24" />
            <a href="/josh">josh</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/5e6ceef905d14ade228ea22c445d57bc?d=https%3A%2F%2Fidenticons.github.com%2Fcede5f0192bcfaaa44c2fabb5fa4f7a9.png&amp;r=x&amp;s=140" width="24" />
            <a href="/afeld">afeld</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/b397b498cc02503a2d86c86176f7fd3e?d=https%3A%2F%2Fidenticons.github.com%2F3cf166c6b73f030b4f67eeaeba301103.png&amp;r=x&amp;s=140" width="24" />
            <a href="/judofyr">judofyr</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/3615ab75201ede5880e779287a6b5316?d=https%3A%2F%2Fidenticons.github.com%2F74c407e263578d03d02c1123aa730b52.png&amp;r=x&amp;s=140" width="24" />
            <a href="/leshill">leshill</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/6d31ae2943be46cebf25123eccb60b07?d=https%3A%2F%2Fidenticons.github.com%2Fdb5bdc8ad46ab6087d9cdfd8a8662ddf.png&amp;r=x&amp;s=140" width="24" />
            <a href="/mkelly12">mkelly12</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/42dddc3b8bb2e6014fd168c617dfa0c8?d=https%3A%2F%2Fidenticons.github.com%2Fa717f41c203cb970f96f706e4b12617b.png&amp;r=x&amp;s=140" width="24" />
            <a href="/two-bit-fool">two-bit-fool</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/38fa6a316b34296bb2532f09e13e8e2e?d=https%3A%2F%2Fidenticons.github.com%2F816b112c6105b3ebd537828a39af4818.png&amp;r=x&amp;s=140" width="24" />
            <a href="/wuzhe">wuzhe</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/db52cb0e5270dbd68a15c2decf8452b4?d=https%3A%2F%2Fidenticons.github.com%2Fa2660550185042d3a4b8edc4af81d841.png&amp;r=x&amp;s=140" width="24" />
            <a href="/michalkot">michalkot</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/c9e53222ca0f2fa4ea054cea6398a277?d=https%3A%2F%2Fidenticons.github.com%2F8eb1dc8803916973b6d2da94dfc83f0a.png&amp;r=x&amp;s=140" width="24" />
            <a href="/hartzler">hartzler</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/cf1dba3adddf45902af811bd23424a01?d=https%3A%2F%2Fidenticons.github.com%2Faa5624a26b4315953b52df8bf0e6d1b7.png&amp;r=x&amp;s=140" width="24" />
            <a href="/mdreizin">mdreizin</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/0f21fef714e0e319126f6fba20e831f4?d=https%3A%2F%2Fidenticons.github.com%2Fe70e5746911b00c114aefc40b8a8874a.png&amp;r=x&amp;s=140" width="24" />
            <a href="/lxb">lxb</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/db33090541526c03c798f82aa0a5dbaa?d=https%3A%2F%2Fidenticons.github.com%2Fc29e2f0d02014ac5e5d125370865fc0d.png&amp;r=x&amp;s=140" width="24" />
            <a href="/lifesinger">lifesinger</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/38af59b019b2b6f445a6039be4d5de61?d=https%3A%2F%2Fidenticons.github.com%2F10f45844ede4d8d053b798809c824678.png&amp;r=x&amp;s=140" width="24" />
            <a href="/mostly-magic">mostly-magic</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/40de52a01e73819462ef8fdc924a4d3c?d=https%3A%2F%2Fidenticons.github.com%2F76218e5302bb5271412880b8e32ac3d7.png&amp;r=x&amp;s=140" width="24" />
            <a href="/lennym">lennym</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/5f52c5d9bba5225dcd3552699923ba4a?d=https%3A%2F%2Fidenticons.github.com%2Fc2cb1fc76f1bbf73ce680c2b78aa328f.png&amp;r=x&amp;s=140" width="24" />
            <a href="/KrisJordan">KrisJordan</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/1d0a77e7fa25279e2ec61a6f802b2862?d=https%3A%2F%2Fidenticons.github.com%2F0cb9827e5625394fd612b96fffc9b357.png&amp;r=x&amp;s=140" width="24" />
            <a href="/kpdecker">kpdecker</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/6c51c14716e24bc1f1a3fb5ad234e773?d=https%3A%2F%2Fidenticons.github.com%2Ff968fdc88852a4a3a27a81fe3f57bfc5.png&amp;r=x&amp;s=140" width="24" />
            <a href="/kjbekkelund">kjbekkelund</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/31144f47759f9773f6297c1a9f734d44?d=https%3A%2F%2Fidenticons.github.com%2Ff05d55dfa7a160ec61493ffa49a5f7d8.png&amp;r=x&amp;s=140" width="24" />
            <a href="/DjebbZ">DjebbZ</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/26fe4c86e992bddfe5b975a3d88431a3?d=https%3A%2F%2Fidenticons.github.com%2F3b26dea73f277fe55774004c8ee331f9.png&amp;r=x&amp;s=140" width="24" />
            <a href="/mitya777">mitya777</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/e2cf4f2e58f26e4cfd8047a875efa2b8?d=https%3A%2F%2Fidenticons.github.com%2Feeb75f0ae5c5115795e84f81ef0ff68d.png&amp;r=x&amp;s=140" width="24" />
            <a href="/mlowicki">mlowicki</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/9d9a811e9ce6c4ba3dceed17b78d3c94?d=https%3A%2F%2Fidenticons.github.com%2F0457bada5f9d582ff7c018251884e06c.png&amp;r=x&amp;s=140" width="24" />
            <a href="/joshvermaire">joshvermaire</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/a257581e35ca09e37f47f6b899c53ef2?d=https%3A%2F%2Fidenticons.github.com%2F8967052b0c4c3f8021091e9d3e08eced.png&amp;r=x&amp;s=140" width="24" />
            <a href="/rutkovsky">rutkovsky</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/bcf9850250d6a24e379401d22d530a09?d=https%3A%2F%2Fidenticons.github.com%2Fb301718653a01a9ac59848f08c0a2bab.png&amp;r=x&amp;s=140" width="24" />
            <a href="/davidmurdoch">davidmurdoch</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/1f1d8371eca200cc839af02a2c9a4334?d=https%3A%2F%2Fidenticons.github.com%2Fb28726656f217dec521d3df9f663028c.png&amp;r=x&amp;s=140" width="24" />
            <a href="/nhajratw">nhajratw</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/8478f9ebe099ad853f022deeb2c1defe?d=https%3A%2F%2Fidenticons.github.com%2Fafdec7005cc9f14302cd0474fd0f3c96.png&amp;r=x&amp;s=140" width="24" />
            <a href="/jasonm">jasonm</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/8414bdf4a204285f17311679ab723114?d=https%3A%2F%2Fidenticons.github.com%2Ff724020e77a1aa323e53487a81d39a28.png&amp;r=x&amp;s=140" width="24" />
            <a href="/jerryorr">jerryorr</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/a0f37219f0943a048003ef5269ff31e8?d=https%3A%2F%2Fidenticons.github.com%2F42999a62bd597f7f6fdc85c73e0daaf0.png&amp;r=x&amp;s=140" width="24" />
            <a href="/byroot">byroot</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/5d40bb22aa977db91a892b75e7ed3a66?d=https%3A%2F%2Fidenticons.github.com%2Fea1c9cf296cb31598b3f9ad26731a772.png&amp;r=x&amp;s=140" width="24" />
            <a href="/williamhc">williamhc</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/13fc04d54868984f5e9d9ad43075dffe?d=https%3A%2F%2Fidenticons.github.com%2Fd33a6f412423b5083e29a5ec9c0504cb.png&amp;r=x&amp;s=140" width="24" />
            <a href="/niallsmart">niallsmart</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/6e1b4fb1960b220515c1673b728b3794?d=https%3A%2F%2Fidenticons.github.com%2Fb1e0573d4c5102218879e97f10367515.png&amp;r=x&amp;s=140" width="24" />
            <a href="/ansman">ansman</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/e9c8b9c7f457b4e5a30d5fc6d51c97bf?d=https%3A%2F%2Fidenticons.github.com%2F3c8ebb190703254a2cb4ede547c4285c.png&amp;r=x&amp;s=140" width="24" />
            <a href="/nsb">nsb</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/a98244cbdacaf1c0b55499466002f7a8?d=https%3A%2F%2Fidenticons.github.com%2F313701b540df992682dccc8f70dc12a0.png&amp;r=x&amp;s=140" width="24" />
            <a href="/fat">fat</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/e746623f29e07ddc0177c963cefbf613?d=https%3A%2F%2Fidenticons.github.com%2F55c10a2da9bd49993a9e5e89236c7582.png&amp;r=x&amp;s=140" width="24" />
            <a href="/jharding">jharding</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/650677040bd93b1ea6827e84da208863?d=https%3A%2F%2Fidenticons.github.com%2F49856ed476ad01fcff881d57e161d73f.png&amp;r=x&amp;s=140" width="24" />
            <a href="/ncr">ncr</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/5390a0787a0d8e5d994e2c5e80e0f6fa?d=https%3A%2F%2Fidenticons.github.com%2Fe9ee64e05b544e8ec7aa28a25570b739.png&amp;r=x&amp;s=140" width="24" />
            <a href="/OCannings">OCannings</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/41ad0e3bcd142758f9d015e0598b6fc5?d=https%3A%2F%2Fidenticons.github.com%2F10160acb3881e739b429644b0aa019e5.png&amp;r=x&amp;s=140" width="24" />
            <a href="/StanAngeloff">StanAngeloff</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/b5c0cf186026bae6da5144f24573269f?d=https%3A%2F%2Fidenticons.github.com%2F61ed5e3c2d1b216068bc64ad75aee4c4.png&amp;r=x&amp;s=140" width="24" />
            <a href="/PaulUithol">PaulUithol</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/fd0a1e2a0b535d0e508873abe64f75fc?d=https%3A%2F%2Fidenticons.github.com%2Fbecbba75f70a129327afa2d6dfc4a1ac.png&amp;r=x&amp;s=140" width="24" />
            <a href="/vovik">vovik</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/960f4a1b324192da9f18c33388375613?d=https%3A%2F%2Fidenticons.github.com%2F2846ebb7cb18d25ade1b5711bc0c4535.png&amp;r=x&amp;s=140" width="24" />
            <a href="/maxkostow">maxkostow</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/aa0667f46a39aebc1b0f58f46dcdc957?d=https%3A%2F%2Fidenticons.github.com%2Fb4755be9028acf67416ab6d2abf34d46.png&amp;r=x&amp;s=140" width="24" />
            <a href="/grayrest">grayrest</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/529a6049c4ad4483dbc62add6da06e1a?d=https%3A%2F%2Fidenticons.github.com%2F6b68046389020611bcec0f52271e28b6.png&amp;r=x&amp;s=140" width="24" />
            <a href="/philfreo">philfreo</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/6ac0145f647965ae703e9d134469ec3a?d=https%3A%2F%2Fidenticons.github.com%2F6913b56f36f0c8cd34d8c9040d2df460.png&amp;r=x&amp;s=140" width="24" />
            <a href="/asgeo1">asgeo1</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/eca4b5e7b087ef4f99191986317cbdba?d=https%3A%2F%2Fidenticons.github.com%2Fea16cdb37355b1a4fb709a112d4baf11.png&amp;r=x&amp;s=140" width="24" />
            <a href="/quartzmo">quartzmo</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/532c4f2c1ed5317cf578ce1d3a14cd4c?d=https%3A%2F%2Fidenticons.github.com%2Fe1054bf2d703bca1e8fe101d3ac5efcd.png&amp;r=x&amp;s=140" width="24" />
            <a href="/rnaveiras">rnaveiras</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/30ac27c2768b1df077c5f236936bd256?d=https%3A%2F%2Fidenticons.github.com%2F379fa3c8b371de63bc6811659c16c28e.png&amp;r=x&amp;s=140" width="24" />
            <a href="/emorikawa">emorikawa</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/0aceea541ccb6831bd61e56a2eba7b2b?d=https%3A%2F%2Fidenticons.github.com%2F12bf3ecc97a093ecde1f62bee66d9084.png&amp;r=x&amp;s=140" width="24" />
            <a href="/rgieseke">rgieseke</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/4e96e258e9d3bd640f9917d0ebda2639?d=https%3A%2F%2Fidenticons.github.com%2Fd65b5ce41a11f8ede73f2976df21a098.png&amp;r=x&amp;s=140" width="24" />
            <a href="/reconbot">reconbot</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/3ee0127f214793b335a8762acf4b6ab6?d=https%3A%2F%2Fidenticons.github.com%2F6139a9d9930c7b19249107050ad171c2.png&amp;r=x&amp;s=140" width="24" />
            <a href="/skaterdav85">skaterdav85</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/8ba6cca99f430db0e2d69d57485d0e70?d=https%3A%2F%2Fidenticons.github.com%2F517541312dac9879d1a6c0a72dcb8931.png&amp;r=x&amp;s=140" width="24" />
            <a href="/dvv">dvv</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/439db9ac83f4ea14a904390900ec6634?d=https%3A%2F%2Fidenticons.github.com%2F328ecb4510bacc4ae03917ee0fae7a8c.png&amp;r=x&amp;s=140" width="24" />
            <a href="/JustinDrake">JustinDrake</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/a943d5447cb2b9e3b9943757061b23ff?d=https%3A%2F%2Fidenticons.github.com%2F613cfe07a22da823b7ba60968c73ab73.png&amp;r=x&amp;s=140" width="24" />
            <a href="/jo">jo</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/95211c7bcc1ea1d5d8b76145c6fc53fb?d=https%3A%2F%2Fidenticons.github.com%2F3fdce67d1a6e08fc0c1fc52c594997ae.png&amp;r=x&amp;s=140" width="24" />
            <a href="/spmason">spmason</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/2c8736930cffc90567b00728c89699c4?d=https%3A%2F%2Fidenticons.github.com%2F1c266f4df64e98b832b56738a7b1fe51.png&amp;r=x&amp;s=140" width="24" />
            <a href="/ahamid">ahamid</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/0feb1d21a9d1da3679d74dcac857c65c?d=https%3A%2F%2Fidenticons.github.com%2F0fd8d838487f1a1ea75d2dc05f48c184.png&amp;r=x&amp;s=140" width="24" />
            <a href="/djbriane">djbriane</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/819238a23c270f774fa7d54c9d9aa244?d=https%3A%2F%2Fidenticons.github.com%2F6460d212290abf4f4b4b06eb49c9f3a2.png&amp;r=x&amp;s=140" width="24" />
            <a href="/yuku-t">yuku-t</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/c44801862bd8629a74eb6b642cc4c23f?d=https%3A%2F%2Fidenticons.github.com%2Fe208540082992909d012297cbc49c425.png&amp;r=x&amp;s=140" width="24" />
            <a href="/diegotres">diegotres</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/00952c7caed397941e16e9c7eb32c2cb?d=https%3A%2F%2Fidenticons.github.com%2F29a482b9c37cec3268b6e1be8eade7b0.png&amp;r=x&amp;s=140" width="24" />
            <a href="/devinhunt">devinhunt</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/6eadce66e218b83b484c5e1ee293f5b9?d=https%3A%2F%2Fidenticons.github.com%2F4d01d08b5ad58aa49c662d7f5bec012a.png&amp;r=x&amp;s=140" width="24" />
            <a href="/threepointone">threepointone</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/7d3d3ec21fb6ef7e467d52c3b4d5ca29?d=https%3A%2F%2Fidenticons.github.com%2F115e1f4b95a3d98bc3c15b0a8d769ccf.png&amp;r=x&amp;s=140" width="24" />
            <a href="/davidmarble">davidmarble</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/386e4f936e8ce6164a20822fbde73a77?d=https%3A%2F%2Fidenticons.github.com%2F43e4b5faf910c197e5ab5573c7b94931.png&amp;r=x&amp;s=140" width="24" />
            <a href="/fixe">fixe</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/aeb289c283986e7504855ae7e38b6626?d=https%3A%2F%2Fidenticons.github.com%2F4f36e95eae2b295304ca1737c165b5c5.png&amp;r=x&amp;s=140" width="24" />
            <a href="/davidgtonge">davidgtonge</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/0d5b8f5b9535d4f7b38f4e6a9a25b708?d=https%3A%2F%2Fidenticons.github.com%2F1730968b38c843659e638a3afce2d1f0.png&amp;r=x&amp;s=140" width="24" />
            <a href="/bunchesofdonald">bunchesofdonald</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/2fb9c31cbd26f8bdfa26485cb7da6a84?d=https%3A%2F%2Fidenticons.github.com%2F2fa97af8329cea9e3646656b9cb28f35.png&amp;r=x&amp;s=140" width="24" />
            <a href="/corbanbrook">corbanbrook</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/08f077ea061585744ee080824f5a8e65?d=https%3A%2F%2Fidenticons.github.com%2F50c3d7614917b24303ee6a220679dab3.png&amp;r=x&amp;s=140" width="24" />
            <a href="/chrislloyd">chrislloyd</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/5a64b64d7a2c7347be1a42a5bbb03360?d=https%3A%2F%2Fidenticons.github.com%2Fd3ee4b885a0649baf73adf9711f4bebf.png&amp;r=x&amp;s=140" width="24" />
            <a href="/ckorhonen">ckorhonen</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/b6861bc75bff3c594212338a914a39ad?d=https%3A%2F%2Fidenticons.github.com%2F4c5bde74a8f110656874902f07378009.png&amp;r=x&amp;s=140" width="24" />
            <a href="/mtodd">mtodd</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/bb5595067078af00cd717faa8494960f?d=https%3A%2F%2Fidenticons.github.com%2Fbc7f621451b4f5df308a8e098112185d.png&amp;r=x&amp;s=140" width="24" />
            <a href="/cdmwebs">cdmwebs</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/b5261de66bc746d4228bace7672d8601?d=https%3A%2F%2Fidenticons.github.com%2Fbf5a0b1c336f01de1213fb7ec70d1c6c.png&amp;r=x&amp;s=140" width="24" />
            <a href="/cdavaz">cdavaz</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/f9383ce985bd48ed45dcff66546f30a7?d=https%3A%2F%2Fidenticons.github.com%2Fcedf81b3828653d0f0c2374a297b21d4.png&amp;r=x&amp;s=140" width="24" />
            <a href="/carldanley">carldanley</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/d0ffa395d8225ca4326f98d011509dfa?d=https%3A%2F%2Fidenticons.github.com%2F462ef7d81ef9ceda455c38d6a7c43491.png&amp;r=x&amp;s=140" width="24" />
            <a href="/TMaYaD">TMaYaD</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/ed442a2cfbe84d5bf40e09c58ba80b5f?d=https%3A%2F%2Fidenticons.github.com%2F5d5b91cc00dc2706d62ef57b9d89faeb.png&amp;r=x&amp;s=140" width="24" />
            <a href="/zamiang">zamiang</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/38f2a832506abfc1cd8123e6c627827c?d=https%3A%2F%2Fidenticons.github.com%2Fe03cba77a01e29e49e8fe0d2fd26d577.png&amp;r=x&amp;s=140" width="24" />
            <a href="/shiftb">shiftb</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/70fdba327e868ccf7cca3f92529ab5f6?d=https%3A%2F%2Fidenticons.github.com%2F4c8e2f2917870cd86d11367c5661cdee.png&amp;r=x&amp;s=140" width="24" />
            <a href="/ptn">ptn</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/4948cf6a15fb7092ccaca08204494913?d=https%3A%2F%2Fidenticons.github.com%2F03cae2063ce4c43fea747ad6e2de683e.png&amp;r=x&amp;s=140" width="24" />
            <a href="/brysgo">brysgo</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/97ee20aff711a1d609c3d1c8ce1b5a5e?d=https%3A%2F%2Fidenticons.github.com%2F5b4cd2f14d31e599ec3b4d44af2e6c58.png&amp;r=x&amp;s=140" width="24" />
            <a href="/folded">folded</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/28634fed2cd60009c8ce99f700b679bd?d=https%3A%2F%2Fidenticons.github.com%2F5791ed2da6f52926d8f8bf02836f7e4a.png&amp;r=x&amp;s=140" width="24" />
            <a href="/lowkaseo">lowkaseo</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/7f02c799d087a8fa2cc3d4b25bf0d2e3?d=https%3A%2F%2Fidenticons.github.com%2F826b6732bcfae4416672a13e5593c7a5.png&amp;r=x&amp;s=140" width="24" />
            <a href="/wereHamster">wereHamster</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/36071898bd7b85af7c24a41d850124e6?d=https%3A%2F%2Fidenticons.github.com%2Fae64b072d81bbe65ffd757cd91996bb3.png&amp;r=x&amp;s=140" width="24" />
            <a href="/damienholzapfel">damienholzapfel</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/afd18bf247216624bd5fdd1b112f0b48?d=https%3A%2F%2Fidenticons.github.com%2F60e1deb043af37db5ea4ce9ae8d2c9ea.png&amp;r=x&amp;s=140" width="24" />
            <a href="/jed">jed</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/8859aabdc8705be792845e9ff8b8d666?d=https%3A%2F%2Fidenticons.github.com%2Ffca3edb778ab913bc8a4aaf1f75aadbf.png&amp;r=x&amp;s=140" width="24" />
            <a href="/TrisMcC">TrisMcC</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/6a83c69b51a2b3c7c0b1a43c5f59357d?d=https%3A%2F%2Fidenticons.github.com%2F0d6e584f7bf39043792ff2bcbf6ff0dc.png&amp;r=x&amp;s=140" width="24" />
            <a href="/j0nx">j0nx</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/e4f80e42794094c98a40bfebef4ec292?d=https%3A%2F%2Fidenticons.github.com%2Fd0aae9539e4dd0bd618e5d2598f18707.png&amp;r=x&amp;s=140" width="24" />
            <a href="/ajsharp">ajsharp</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/934f858e451cf9b771996b2940cd696b?d=https%3A%2F%2Fidenticons.github.com%2F985e9a46e10005356bbaf194249f6856.png&amp;r=x&amp;s=140" width="24" />
            <a href="/neerajdotname">neerajdotname</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/7a0e72a6f55811246bb5d9a946fd2e49?d=https%3A%2F%2Fidenticons.github.com%2F9365ae980268ef00988a8048fa732226.png&amp;r=x&amp;s=140" width="24" />
            <a href="/RStankov">RStankov</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/81748ac94225447782d2f02218062f73?d=https%3A%2F%2Fidenticons.github.com%2F0ded1ce0d4a11b2318953769e323e344.png&amp;r=x&amp;s=140" width="24" />
            <a href="/ganmor">ganmor</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/679a33ec2ceb2195591888496d287df8?d=https%3A%2F%2Fidenticons.github.com%2F1cf33fc29c5a7f169cb51d7afe381553.png&amp;r=x&amp;s=140" width="24" />
            <a href="/DmitryBaranovskiy">DmitryBaranovskiy</a>
          </li>
      </ul>
    </div>
  </div>

<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>1581 lines (1357 sloc)</span>
        <span>60.223 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
                <a class="minibutton tooltipped upwards"
                   title="Clicking this button will automatically fork this project so you can edit the file"
                   href="/amdjs/backbone/edit/master/backbone.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/amdjs/backbone/raw/master/backbone.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/amdjs/backbone/blame/master/backbone.js" class="button minibutton ">Blame</a>
          <a href="/amdjs/backbone/commits/master/backbone.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger empty-icon tooltipped downwards"
             href="/amdjs/backbone/delete/master/backbone.js"
             title="Fork this project and delete file"
             data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          Delete
        </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>
<span id="L559" rel="#L559">559</span>
<span id="L560" rel="#L560">560</span>
<span id="L561" rel="#L561">561</span>
<span id="L562" rel="#L562">562</span>
<span id="L563" rel="#L563">563</span>
<span id="L564" rel="#L564">564</span>
<span id="L565" rel="#L565">565</span>
<span id="L566" rel="#L566">566</span>
<span id="L567" rel="#L567">567</span>
<span id="L568" rel="#L568">568</span>
<span id="L569" rel="#L569">569</span>
<span id="L570" rel="#L570">570</span>
<span id="L571" rel="#L571">571</span>
<span id="L572" rel="#L572">572</span>
<span id="L573" rel="#L573">573</span>
<span id="L574" rel="#L574">574</span>
<span id="L575" rel="#L575">575</span>
<span id="L576" rel="#L576">576</span>
<span id="L577" rel="#L577">577</span>
<span id="L578" rel="#L578">578</span>
<span id="L579" rel="#L579">579</span>
<span id="L580" rel="#L580">580</span>
<span id="L581" rel="#L581">581</span>
<span id="L582" rel="#L582">582</span>
<span id="L583" rel="#L583">583</span>
<span id="L584" rel="#L584">584</span>
<span id="L585" rel="#L585">585</span>
<span id="L586" rel="#L586">586</span>
<span id="L587" rel="#L587">587</span>
<span id="L588" rel="#L588">588</span>
<span id="L589" rel="#L589">589</span>
<span id="L590" rel="#L590">590</span>
<span id="L591" rel="#L591">591</span>
<span id="L592" rel="#L592">592</span>
<span id="L593" rel="#L593">593</span>
<span id="L594" rel="#L594">594</span>
<span id="L595" rel="#L595">595</span>
<span id="L596" rel="#L596">596</span>
<span id="L597" rel="#L597">597</span>
<span id="L598" rel="#L598">598</span>
<span id="L599" rel="#L599">599</span>
<span id="L600" rel="#L600">600</span>
<span id="L601" rel="#L601">601</span>
<span id="L602" rel="#L602">602</span>
<span id="L603" rel="#L603">603</span>
<span id="L604" rel="#L604">604</span>
<span id="L605" rel="#L605">605</span>
<span id="L606" rel="#L606">606</span>
<span id="L607" rel="#L607">607</span>
<span id="L608" rel="#L608">608</span>
<span id="L609" rel="#L609">609</span>
<span id="L610" rel="#L610">610</span>
<span id="L611" rel="#L611">611</span>
<span id="L612" rel="#L612">612</span>
<span id="L613" rel="#L613">613</span>
<span id="L614" rel="#L614">614</span>
<span id="L615" rel="#L615">615</span>
<span id="L616" rel="#L616">616</span>
<span id="L617" rel="#L617">617</span>
<span id="L618" rel="#L618">618</span>
<span id="L619" rel="#L619">619</span>
<span id="L620" rel="#L620">620</span>
<span id="L621" rel="#L621">621</span>
<span id="L622" rel="#L622">622</span>
<span id="L623" rel="#L623">623</span>
<span id="L624" rel="#L624">624</span>
<span id="L625" rel="#L625">625</span>
<span id="L626" rel="#L626">626</span>
<span id="L627" rel="#L627">627</span>
<span id="L628" rel="#L628">628</span>
<span id="L629" rel="#L629">629</span>
<span id="L630" rel="#L630">630</span>
<span id="L631" rel="#L631">631</span>
<span id="L632" rel="#L632">632</span>
<span id="L633" rel="#L633">633</span>
<span id="L634" rel="#L634">634</span>
<span id="L635" rel="#L635">635</span>
<span id="L636" rel="#L636">636</span>
<span id="L637" rel="#L637">637</span>
<span id="L638" rel="#L638">638</span>
<span id="L639" rel="#L639">639</span>
<span id="L640" rel="#L640">640</span>
<span id="L641" rel="#L641">641</span>
<span id="L642" rel="#L642">642</span>
<span id="L643" rel="#L643">643</span>
<span id="L644" rel="#L644">644</span>
<span id="L645" rel="#L645">645</span>
<span id="L646" rel="#L646">646</span>
<span id="L647" rel="#L647">647</span>
<span id="L648" rel="#L648">648</span>
<span id="L649" rel="#L649">649</span>
<span id="L650" rel="#L650">650</span>
<span id="L651" rel="#L651">651</span>
<span id="L652" rel="#L652">652</span>
<span id="L653" rel="#L653">653</span>
<span id="L654" rel="#L654">654</span>
<span id="L655" rel="#L655">655</span>
<span id="L656" rel="#L656">656</span>
<span id="L657" rel="#L657">657</span>
<span id="L658" rel="#L658">658</span>
<span id="L659" rel="#L659">659</span>
<span id="L660" rel="#L660">660</span>
<span id="L661" rel="#L661">661</span>
<span id="L662" rel="#L662">662</span>
<span id="L663" rel="#L663">663</span>
<span id="L664" rel="#L664">664</span>
<span id="L665" rel="#L665">665</span>
<span id="L666" rel="#L666">666</span>
<span id="L667" rel="#L667">667</span>
<span id="L668" rel="#L668">668</span>
<span id="L669" rel="#L669">669</span>
<span id="L670" rel="#L670">670</span>
<span id="L671" rel="#L671">671</span>
<span id="L672" rel="#L672">672</span>
<span id="L673" rel="#L673">673</span>
<span id="L674" rel="#L674">674</span>
<span id="L675" rel="#L675">675</span>
<span id="L676" rel="#L676">676</span>
<span id="L677" rel="#L677">677</span>
<span id="L678" rel="#L678">678</span>
<span id="L679" rel="#L679">679</span>
<span id="L680" rel="#L680">680</span>
<span id="L681" rel="#L681">681</span>
<span id="L682" rel="#L682">682</span>
<span id="L683" rel="#L683">683</span>
<span id="L684" rel="#L684">684</span>
<span id="L685" rel="#L685">685</span>
<span id="L686" rel="#L686">686</span>
<span id="L687" rel="#L687">687</span>
<span id="L688" rel="#L688">688</span>
<span id="L689" rel="#L689">689</span>
<span id="L690" rel="#L690">690</span>
<span id="L691" rel="#L691">691</span>
<span id="L692" rel="#L692">692</span>
<span id="L693" rel="#L693">693</span>
<span id="L694" rel="#L694">694</span>
<span id="L695" rel="#L695">695</span>
<span id="L696" rel="#L696">696</span>
<span id="L697" rel="#L697">697</span>
<span id="L698" rel="#L698">698</span>
<span id="L699" rel="#L699">699</span>
<span id="L700" rel="#L700">700</span>
<span id="L701" rel="#L701">701</span>
<span id="L702" rel="#L702">702</span>
<span id="L703" rel="#L703">703</span>
<span id="L704" rel="#L704">704</span>
<span id="L705" rel="#L705">705</span>
<span id="L706" rel="#L706">706</span>
<span id="L707" rel="#L707">707</span>
<span id="L708" rel="#L708">708</span>
<span id="L709" rel="#L709">709</span>
<span id="L710" rel="#L710">710</span>
<span id="L711" rel="#L711">711</span>
<span id="L712" rel="#L712">712</span>
<span id="L713" rel="#L713">713</span>
<span id="L714" rel="#L714">714</span>
<span id="L715" rel="#L715">715</span>
<span id="L716" rel="#L716">716</span>
<span id="L717" rel="#L717">717</span>
<span id="L718" rel="#L718">718</span>
<span id="L719" rel="#L719">719</span>
<span id="L720" rel="#L720">720</span>
<span id="L721" rel="#L721">721</span>
<span id="L722" rel="#L722">722</span>
<span id="L723" rel="#L723">723</span>
<span id="L724" rel="#L724">724</span>
<span id="L725" rel="#L725">725</span>
<span id="L726" rel="#L726">726</span>
<span id="L727" rel="#L727">727</span>
<span id="L728" rel="#L728">728</span>
<span id="L729" rel="#L729">729</span>
<span id="L730" rel="#L730">730</span>
<span id="L731" rel="#L731">731</span>
<span id="L732" rel="#L732">732</span>
<span id="L733" rel="#L733">733</span>
<span id="L734" rel="#L734">734</span>
<span id="L735" rel="#L735">735</span>
<span id="L736" rel="#L736">736</span>
<span id="L737" rel="#L737">737</span>
<span id="L738" rel="#L738">738</span>
<span id="L739" rel="#L739">739</span>
<span id="L740" rel="#L740">740</span>
<span id="L741" rel="#L741">741</span>
<span id="L742" rel="#L742">742</span>
<span id="L743" rel="#L743">743</span>
<span id="L744" rel="#L744">744</span>
<span id="L745" rel="#L745">745</span>
<span id="L746" rel="#L746">746</span>
<span id="L747" rel="#L747">747</span>
<span id="L748" rel="#L748">748</span>
<span id="L749" rel="#L749">749</span>
<span id="L750" rel="#L750">750</span>
<span id="L751" rel="#L751">751</span>
<span id="L752" rel="#L752">752</span>
<span id="L753" rel="#L753">753</span>
<span id="L754" rel="#L754">754</span>
<span id="L755" rel="#L755">755</span>
<span id="L756" rel="#L756">756</span>
<span id="L757" rel="#L757">757</span>
<span id="L758" rel="#L758">758</span>
<span id="L759" rel="#L759">759</span>
<span id="L760" rel="#L760">760</span>
<span id="L761" rel="#L761">761</span>
<span id="L762" rel="#L762">762</span>
<span id="L763" rel="#L763">763</span>
<span id="L764" rel="#L764">764</span>
<span id="L765" rel="#L765">765</span>
<span id="L766" rel="#L766">766</span>
<span id="L767" rel="#L767">767</span>
<span id="L768" rel="#L768">768</span>
<span id="L769" rel="#L769">769</span>
<span id="L770" rel="#L770">770</span>
<span id="L771" rel="#L771">771</span>
<span id="L772" rel="#L772">772</span>
<span id="L773" rel="#L773">773</span>
<span id="L774" rel="#L774">774</span>
<span id="L775" rel="#L775">775</span>
<span id="L776" rel="#L776">776</span>
<span id="L777" rel="#L777">777</span>
<span id="L778" rel="#L778">778</span>
<span id="L779" rel="#L779">779</span>
<span id="L780" rel="#L780">780</span>
<span id="L781" rel="#L781">781</span>
<span id="L782" rel="#L782">782</span>
<span id="L783" rel="#L783">783</span>
<span id="L784" rel="#L784">784</span>
<span id="L785" rel="#L785">785</span>
<span id="L786" rel="#L786">786</span>
<span id="L787" rel="#L787">787</span>
<span id="L788" rel="#L788">788</span>
<span id="L789" rel="#L789">789</span>
<span id="L790" rel="#L790">790</span>
<span id="L791" rel="#L791">791</span>
<span id="L792" rel="#L792">792</span>
<span id="L793" rel="#L793">793</span>
<span id="L794" rel="#L794">794</span>
<span id="L795" rel="#L795">795</span>
<span id="L796" rel="#L796">796</span>
<span id="L797" rel="#L797">797</span>
<span id="L798" rel="#L798">798</span>
<span id="L799" rel="#L799">799</span>
<span id="L800" rel="#L800">800</span>
<span id="L801" rel="#L801">801</span>
<span id="L802" rel="#L802">802</span>
<span id="L803" rel="#L803">803</span>
<span id="L804" rel="#L804">804</span>
<span id="L805" rel="#L805">805</span>
<span id="L806" rel="#L806">806</span>
<span id="L807" rel="#L807">807</span>
<span id="L808" rel="#L808">808</span>
<span id="L809" rel="#L809">809</span>
<span id="L810" rel="#L810">810</span>
<span id="L811" rel="#L811">811</span>
<span id="L812" rel="#L812">812</span>
<span id="L813" rel="#L813">813</span>
<span id="L814" rel="#L814">814</span>
<span id="L815" rel="#L815">815</span>
<span id="L816" rel="#L816">816</span>
<span id="L817" rel="#L817">817</span>
<span id="L818" rel="#L818">818</span>
<span id="L819" rel="#L819">819</span>
<span id="L820" rel="#L820">820</span>
<span id="L821" rel="#L821">821</span>
<span id="L822" rel="#L822">822</span>
<span id="L823" rel="#L823">823</span>
<span id="L824" rel="#L824">824</span>
<span id="L825" rel="#L825">825</span>
<span id="L826" rel="#L826">826</span>
<span id="L827" rel="#L827">827</span>
<span id="L828" rel="#L828">828</span>
<span id="L829" rel="#L829">829</span>
<span id="L830" rel="#L830">830</span>
<span id="L831" rel="#L831">831</span>
<span id="L832" rel="#L832">832</span>
<span id="L833" rel="#L833">833</span>
<span id="L834" rel="#L834">834</span>
<span id="L835" rel="#L835">835</span>
<span id="L836" rel="#L836">836</span>
<span id="L837" rel="#L837">837</span>
<span id="L838" rel="#L838">838</span>
<span id="L839" rel="#L839">839</span>
<span id="L840" rel="#L840">840</span>
<span id="L841" rel="#L841">841</span>
<span id="L842" rel="#L842">842</span>
<span id="L843" rel="#L843">843</span>
<span id="L844" rel="#L844">844</span>
<span id="L845" rel="#L845">845</span>
<span id="L846" rel="#L846">846</span>
<span id="L847" rel="#L847">847</span>
<span id="L848" rel="#L848">848</span>
<span id="L849" rel="#L849">849</span>
<span id="L850" rel="#L850">850</span>
<span id="L851" rel="#L851">851</span>
<span id="L852" rel="#L852">852</span>
<span id="L853" rel="#L853">853</span>
<span id="L854" rel="#L854">854</span>
<span id="L855" rel="#L855">855</span>
<span id="L856" rel="#L856">856</span>
<span id="L857" rel="#L857">857</span>
<span id="L858" rel="#L858">858</span>
<span id="L859" rel="#L859">859</span>
<span id="L860" rel="#L860">860</span>
<span id="L861" rel="#L861">861</span>
<span id="L862" rel="#L862">862</span>
<span id="L863" rel="#L863">863</span>
<span id="L864" rel="#L864">864</span>
<span id="L865" rel="#L865">865</span>
<span id="L866" rel="#L866">866</span>
<span id="L867" rel="#L867">867</span>
<span id="L868" rel="#L868">868</span>
<span id="L869" rel="#L869">869</span>
<span id="L870" rel="#L870">870</span>
<span id="L871" rel="#L871">871</span>
<span id="L872" rel="#L872">872</span>
<span id="L873" rel="#L873">873</span>
<span id="L874" rel="#L874">874</span>
<span id="L875" rel="#L875">875</span>
<span id="L876" rel="#L876">876</span>
<span id="L877" rel="#L877">877</span>
<span id="L878" rel="#L878">878</span>
<span id="L879" rel="#L879">879</span>
<span id="L880" rel="#L880">880</span>
<span id="L881" rel="#L881">881</span>
<span id="L882" rel="#L882">882</span>
<span id="L883" rel="#L883">883</span>
<span id="L884" rel="#L884">884</span>
<span id="L885" rel="#L885">885</span>
<span id="L886" rel="#L886">886</span>
<span id="L887" rel="#L887">887</span>
<span id="L888" rel="#L888">888</span>
<span id="L889" rel="#L889">889</span>
<span id="L890" rel="#L890">890</span>
<span id="L891" rel="#L891">891</span>
<span id="L892" rel="#L892">892</span>
<span id="L893" rel="#L893">893</span>
<span id="L894" rel="#L894">894</span>
<span id="L895" rel="#L895">895</span>
<span id="L896" rel="#L896">896</span>
<span id="L897" rel="#L897">897</span>
<span id="L898" rel="#L898">898</span>
<span id="L899" rel="#L899">899</span>
<span id="L900" rel="#L900">900</span>
<span id="L901" rel="#L901">901</span>
<span id="L902" rel="#L902">902</span>
<span id="L903" rel="#L903">903</span>
<span id="L904" rel="#L904">904</span>
<span id="L905" rel="#L905">905</span>
<span id="L906" rel="#L906">906</span>
<span id="L907" rel="#L907">907</span>
<span id="L908" rel="#L908">908</span>
<span id="L909" rel="#L909">909</span>
<span id="L910" rel="#L910">910</span>
<span id="L911" rel="#L911">911</span>
<span id="L912" rel="#L912">912</span>
<span id="L913" rel="#L913">913</span>
<span id="L914" rel="#L914">914</span>
<span id="L915" rel="#L915">915</span>
<span id="L916" rel="#L916">916</span>
<span id="L917" rel="#L917">917</span>
<span id="L918" rel="#L918">918</span>
<span id="L919" rel="#L919">919</span>
<span id="L920" rel="#L920">920</span>
<span id="L921" rel="#L921">921</span>
<span id="L922" rel="#L922">922</span>
<span id="L923" rel="#L923">923</span>
<span id="L924" rel="#L924">924</span>
<span id="L925" rel="#L925">925</span>
<span id="L926" rel="#L926">926</span>
<span id="L927" rel="#L927">927</span>
<span id="L928" rel="#L928">928</span>
<span id="L929" rel="#L929">929</span>
<span id="L930" rel="#L930">930</span>
<span id="L931" rel="#L931">931</span>
<span id="L932" rel="#L932">932</span>
<span id="L933" rel="#L933">933</span>
<span id="L934" rel="#L934">934</span>
<span id="L935" rel="#L935">935</span>
<span id="L936" rel="#L936">936</span>
<span id="L937" rel="#L937">937</span>
<span id="L938" rel="#L938">938</span>
<span id="L939" rel="#L939">939</span>
<span id="L940" rel="#L940">940</span>
<span id="L941" rel="#L941">941</span>
<span id="L942" rel="#L942">942</span>
<span id="L943" rel="#L943">943</span>
<span id="L944" rel="#L944">944</span>
<span id="L945" rel="#L945">945</span>
<span id="L946" rel="#L946">946</span>
<span id="L947" rel="#L947">947</span>
<span id="L948" rel="#L948">948</span>
<span id="L949" rel="#L949">949</span>
<span id="L950" rel="#L950">950</span>
<span id="L951" rel="#L951">951</span>
<span id="L952" rel="#L952">952</span>
<span id="L953" rel="#L953">953</span>
<span id="L954" rel="#L954">954</span>
<span id="L955" rel="#L955">955</span>
<span id="L956" rel="#L956">956</span>
<span id="L957" rel="#L957">957</span>
<span id="L958" rel="#L958">958</span>
<span id="L959" rel="#L959">959</span>
<span id="L960" rel="#L960">960</span>
<span id="L961" rel="#L961">961</span>
<span id="L962" rel="#L962">962</span>
<span id="L963" rel="#L963">963</span>
<span id="L964" rel="#L964">964</span>
<span id="L965" rel="#L965">965</span>
<span id="L966" rel="#L966">966</span>
<span id="L967" rel="#L967">967</span>
<span id="L968" rel="#L968">968</span>
<span id="L969" rel="#L969">969</span>
<span id="L970" rel="#L970">970</span>
<span id="L971" rel="#L971">971</span>
<span id="L972" rel="#L972">972</span>
<span id="L973" rel="#L973">973</span>
<span id="L974" rel="#L974">974</span>
<span id="L975" rel="#L975">975</span>
<span id="L976" rel="#L976">976</span>
<span id="L977" rel="#L977">977</span>
<span id="L978" rel="#L978">978</span>
<span id="L979" rel="#L979">979</span>
<span id="L980" rel="#L980">980</span>
<span id="L981" rel="#L981">981</span>
<span id="L982" rel="#L982">982</span>
<span id="L983" rel="#L983">983</span>
<span id="L984" rel="#L984">984</span>
<span id="L985" rel="#L985">985</span>
<span id="L986" rel="#L986">986</span>
<span id="L987" rel="#L987">987</span>
<span id="L988" rel="#L988">988</span>
<span id="L989" rel="#L989">989</span>
<span id="L990" rel="#L990">990</span>
<span id="L991" rel="#L991">991</span>
<span id="L992" rel="#L992">992</span>
<span id="L993" rel="#L993">993</span>
<span id="L994" rel="#L994">994</span>
<span id="L995" rel="#L995">995</span>
<span id="L996" rel="#L996">996</span>
<span id="L997" rel="#L997">997</span>
<span id="L998" rel="#L998">998</span>
<span id="L999" rel="#L999">999</span>
<span id="L1000" rel="#L1000">1000</span>
<span id="L1001" rel="#L1001">1001</span>
<span id="L1002" rel="#L1002">1002</span>
<span id="L1003" rel="#L1003">1003</span>
<span id="L1004" rel="#L1004">1004</span>
<span id="L1005" rel="#L1005">1005</span>
<span id="L1006" rel="#L1006">1006</span>
<span id="L1007" rel="#L1007">1007</span>
<span id="L1008" rel="#L1008">1008</span>
<span id="L1009" rel="#L1009">1009</span>
<span id="L1010" rel="#L1010">1010</span>
<span id="L1011" rel="#L1011">1011</span>
<span id="L1012" rel="#L1012">1012</span>
<span id="L1013" rel="#L1013">1013</span>
<span id="L1014" rel="#L1014">1014</span>
<span id="L1015" rel="#L1015">1015</span>
<span id="L1016" rel="#L1016">1016</span>
<span id="L1017" rel="#L1017">1017</span>
<span id="L1018" rel="#L1018">1018</span>
<span id="L1019" rel="#L1019">1019</span>
<span id="L1020" rel="#L1020">1020</span>
<span id="L1021" rel="#L1021">1021</span>
<span id="L1022" rel="#L1022">1022</span>
<span id="L1023" rel="#L1023">1023</span>
<span id="L1024" rel="#L1024">1024</span>
<span id="L1025" rel="#L1025">1025</span>
<span id="L1026" rel="#L1026">1026</span>
<span id="L1027" rel="#L1027">1027</span>
<span id="L1028" rel="#L1028">1028</span>
<span id="L1029" rel="#L1029">1029</span>
<span id="L1030" rel="#L1030">1030</span>
<span id="L1031" rel="#L1031">1031</span>
<span id="L1032" rel="#L1032">1032</span>
<span id="L1033" rel="#L1033">1033</span>
<span id="L1034" rel="#L1034">1034</span>
<span id="L1035" rel="#L1035">1035</span>
<span id="L1036" rel="#L1036">1036</span>
<span id="L1037" rel="#L1037">1037</span>
<span id="L1038" rel="#L1038">1038</span>
<span id="L1039" rel="#L1039">1039</span>
<span id="L1040" rel="#L1040">1040</span>
<span id="L1041" rel="#L1041">1041</span>
<span id="L1042" rel="#L1042">1042</span>
<span id="L1043" rel="#L1043">1043</span>
<span id="L1044" rel="#L1044">1044</span>
<span id="L1045" rel="#L1045">1045</span>
<span id="L1046" rel="#L1046">1046</span>
<span id="L1047" rel="#L1047">1047</span>
<span id="L1048" rel="#L1048">1048</span>
<span id="L1049" rel="#L1049">1049</span>
<span id="L1050" rel="#L1050">1050</span>
<span id="L1051" rel="#L1051">1051</span>
<span id="L1052" rel="#L1052">1052</span>
<span id="L1053" rel="#L1053">1053</span>
<span id="L1054" rel="#L1054">1054</span>
<span id="L1055" rel="#L1055">1055</span>
<span id="L1056" rel="#L1056">1056</span>
<span id="L1057" rel="#L1057">1057</span>
<span id="L1058" rel="#L1058">1058</span>
<span id="L1059" rel="#L1059">1059</span>
<span id="L1060" rel="#L1060">1060</span>
<span id="L1061" rel="#L1061">1061</span>
<span id="L1062" rel="#L1062">1062</span>
<span id="L1063" rel="#L1063">1063</span>
<span id="L1064" rel="#L1064">1064</span>
<span id="L1065" rel="#L1065">1065</span>
<span id="L1066" rel="#L1066">1066</span>
<span id="L1067" rel="#L1067">1067</span>
<span id="L1068" rel="#L1068">1068</span>
<span id="L1069" rel="#L1069">1069</span>
<span id="L1070" rel="#L1070">1070</span>
<span id="L1071" rel="#L1071">1071</span>
<span id="L1072" rel="#L1072">1072</span>
<span id="L1073" rel="#L1073">1073</span>
<span id="L1074" rel="#L1074">1074</span>
<span id="L1075" rel="#L1075">1075</span>
<span id="L1076" rel="#L1076">1076</span>
<span id="L1077" rel="#L1077">1077</span>
<span id="L1078" rel="#L1078">1078</span>
<span id="L1079" rel="#L1079">1079</span>
<span id="L1080" rel="#L1080">1080</span>
<span id="L1081" rel="#L1081">1081</span>
<span id="L1082" rel="#L1082">1082</span>
<span id="L1083" rel="#L1083">1083</span>
<span id="L1084" rel="#L1084">1084</span>
<span id="L1085" rel="#L1085">1085</span>
<span id="L1086" rel="#L1086">1086</span>
<span id="L1087" rel="#L1087">1087</span>
<span id="L1088" rel="#L1088">1088</span>
<span id="L1089" rel="#L1089">1089</span>
<span id="L1090" rel="#L1090">1090</span>
<span id="L1091" rel="#L1091">1091</span>
<span id="L1092" rel="#L1092">1092</span>
<span id="L1093" rel="#L1093">1093</span>
<span id="L1094" rel="#L1094">1094</span>
<span id="L1095" rel="#L1095">1095</span>
<span id="L1096" rel="#L1096">1096</span>
<span id="L1097" rel="#L1097">1097</span>
<span id="L1098" rel="#L1098">1098</span>
<span id="L1099" rel="#L1099">1099</span>
<span id="L1100" rel="#L1100">1100</span>
<span id="L1101" rel="#L1101">1101</span>
<span id="L1102" rel="#L1102">1102</span>
<span id="L1103" rel="#L1103">1103</span>
<span id="L1104" rel="#L1104">1104</span>
<span id="L1105" rel="#L1105">1105</span>
<span id="L1106" rel="#L1106">1106</span>
<span id="L1107" rel="#L1107">1107</span>
<span id="L1108" rel="#L1108">1108</span>
<span id="L1109" rel="#L1109">1109</span>
<span id="L1110" rel="#L1110">1110</span>
<span id="L1111" rel="#L1111">1111</span>
<span id="L1112" rel="#L1112">1112</span>
<span id="L1113" rel="#L1113">1113</span>
<span id="L1114" rel="#L1114">1114</span>
<span id="L1115" rel="#L1115">1115</span>
<span id="L1116" rel="#L1116">1116</span>
<span id="L1117" rel="#L1117">1117</span>
<span id="L1118" rel="#L1118">1118</span>
<span id="L1119" rel="#L1119">1119</span>
<span id="L1120" rel="#L1120">1120</span>
<span id="L1121" rel="#L1121">1121</span>
<span id="L1122" rel="#L1122">1122</span>
<span id="L1123" rel="#L1123">1123</span>
<span id="L1124" rel="#L1124">1124</span>
<span id="L1125" rel="#L1125">1125</span>
<span id="L1126" rel="#L1126">1126</span>
<span id="L1127" rel="#L1127">1127</span>
<span id="L1128" rel="#L1128">1128</span>
<span id="L1129" rel="#L1129">1129</span>
<span id="L1130" rel="#L1130">1130</span>
<span id="L1131" rel="#L1131">1131</span>
<span id="L1132" rel="#L1132">1132</span>
<span id="L1133" rel="#L1133">1133</span>
<span id="L1134" rel="#L1134">1134</span>
<span id="L1135" rel="#L1135">1135</span>
<span id="L1136" rel="#L1136">1136</span>
<span id="L1137" rel="#L1137">1137</span>
<span id="L1138" rel="#L1138">1138</span>
<span id="L1139" rel="#L1139">1139</span>
<span id="L1140" rel="#L1140">1140</span>
<span id="L1141" rel="#L1141">1141</span>
<span id="L1142" rel="#L1142">1142</span>
<span id="L1143" rel="#L1143">1143</span>
<span id="L1144" rel="#L1144">1144</span>
<span id="L1145" rel="#L1145">1145</span>
<span id="L1146" rel="#L1146">1146</span>
<span id="L1147" rel="#L1147">1147</span>
<span id="L1148" rel="#L1148">1148</span>
<span id="L1149" rel="#L1149">1149</span>
<span id="L1150" rel="#L1150">1150</span>
<span id="L1151" rel="#L1151">1151</span>
<span id="L1152" rel="#L1152">1152</span>
<span id="L1153" rel="#L1153">1153</span>
<span id="L1154" rel="#L1154">1154</span>
<span id="L1155" rel="#L1155">1155</span>
<span id="L1156" rel="#L1156">1156</span>
<span id="L1157" rel="#L1157">1157</span>
<span id="L1158" rel="#L1158">1158</span>
<span id="L1159" rel="#L1159">1159</span>
<span id="L1160" rel="#L1160">1160</span>
<span id="L1161" rel="#L1161">1161</span>
<span id="L1162" rel="#L1162">1162</span>
<span id="L1163" rel="#L1163">1163</span>
<span id="L1164" rel="#L1164">1164</span>
<span id="L1165" rel="#L1165">1165</span>
<span id="L1166" rel="#L1166">1166</span>
<span id="L1167" rel="#L1167">1167</span>
<span id="L1168" rel="#L1168">1168</span>
<span id="L1169" rel="#L1169">1169</span>
<span id="L1170" rel="#L1170">1170</span>
<span id="L1171" rel="#L1171">1171</span>
<span id="L1172" rel="#L1172">1172</span>
<span id="L1173" rel="#L1173">1173</span>
<span id="L1174" rel="#L1174">1174</span>
<span id="L1175" rel="#L1175">1175</span>
<span id="L1176" rel="#L1176">1176</span>
<span id="L1177" rel="#L1177">1177</span>
<span id="L1178" rel="#L1178">1178</span>
<span id="L1179" rel="#L1179">1179</span>
<span id="L1180" rel="#L1180">1180</span>
<span id="L1181" rel="#L1181">1181</span>
<span id="L1182" rel="#L1182">1182</span>
<span id="L1183" rel="#L1183">1183</span>
<span id="L1184" rel="#L1184">1184</span>
<span id="L1185" rel="#L1185">1185</span>
<span id="L1186" rel="#L1186">1186</span>
<span id="L1187" rel="#L1187">1187</span>
<span id="L1188" rel="#L1188">1188</span>
<span id="L1189" rel="#L1189">1189</span>
<span id="L1190" rel="#L1190">1190</span>
<span id="L1191" rel="#L1191">1191</span>
<span id="L1192" rel="#L1192">1192</span>
<span id="L1193" rel="#L1193">1193</span>
<span id="L1194" rel="#L1194">1194</span>
<span id="L1195" rel="#L1195">1195</span>
<span id="L1196" rel="#L1196">1196</span>
<span id="L1197" rel="#L1197">1197</span>
<span id="L1198" rel="#L1198">1198</span>
<span id="L1199" rel="#L1199">1199</span>
<span id="L1200" rel="#L1200">1200</span>
<span id="L1201" rel="#L1201">1201</span>
<span id="L1202" rel="#L1202">1202</span>
<span id="L1203" rel="#L1203">1203</span>
<span id="L1204" rel="#L1204">1204</span>
<span id="L1205" rel="#L1205">1205</span>
<span id="L1206" rel="#L1206">1206</span>
<span id="L1207" rel="#L1207">1207</span>
<span id="L1208" rel="#L1208">1208</span>
<span id="L1209" rel="#L1209">1209</span>
<span id="L1210" rel="#L1210">1210</span>
<span id="L1211" rel="#L1211">1211</span>
<span id="L1212" rel="#L1212">1212</span>
<span id="L1213" rel="#L1213">1213</span>
<span id="L1214" rel="#L1214">1214</span>
<span id="L1215" rel="#L1215">1215</span>
<span id="L1216" rel="#L1216">1216</span>
<span id="L1217" rel="#L1217">1217</span>
<span id="L1218" rel="#L1218">1218</span>
<span id="L1219" rel="#L1219">1219</span>
<span id="L1220" rel="#L1220">1220</span>
<span id="L1221" rel="#L1221">1221</span>
<span id="L1222" rel="#L1222">1222</span>
<span id="L1223" rel="#L1223">1223</span>
<span id="L1224" rel="#L1224">1224</span>
<span id="L1225" rel="#L1225">1225</span>
<span id="L1226" rel="#L1226">1226</span>
<span id="L1227" rel="#L1227">1227</span>
<span id="L1228" rel="#L1228">1228</span>
<span id="L1229" rel="#L1229">1229</span>
<span id="L1230" rel="#L1230">1230</span>
<span id="L1231" rel="#L1231">1231</span>
<span id="L1232" rel="#L1232">1232</span>
<span id="L1233" rel="#L1233">1233</span>
<span id="L1234" rel="#L1234">1234</span>
<span id="L1235" rel="#L1235">1235</span>
<span id="L1236" rel="#L1236">1236</span>
<span id="L1237" rel="#L1237">1237</span>
<span id="L1238" rel="#L1238">1238</span>
<span id="L1239" rel="#L1239">1239</span>
<span id="L1240" rel="#L1240">1240</span>
<span id="L1241" rel="#L1241">1241</span>
<span id="L1242" rel="#L1242">1242</span>
<span id="L1243" rel="#L1243">1243</span>
<span id="L1244" rel="#L1244">1244</span>
<span id="L1245" rel="#L1245">1245</span>
<span id="L1246" rel="#L1246">1246</span>
<span id="L1247" rel="#L1247">1247</span>
<span id="L1248" rel="#L1248">1248</span>
<span id="L1249" rel="#L1249">1249</span>
<span id="L1250" rel="#L1250">1250</span>
<span id="L1251" rel="#L1251">1251</span>
<span id="L1252" rel="#L1252">1252</span>
<span id="L1253" rel="#L1253">1253</span>
<span id="L1254" rel="#L1254">1254</span>
<span id="L1255" rel="#L1255">1255</span>
<span id="L1256" rel="#L1256">1256</span>
<span id="L1257" rel="#L1257">1257</span>
<span id="L1258" rel="#L1258">1258</span>
<span id="L1259" rel="#L1259">1259</span>
<span id="L1260" rel="#L1260">1260</span>
<span id="L1261" rel="#L1261">1261</span>
<span id="L1262" rel="#L1262">1262</span>
<span id="L1263" rel="#L1263">1263</span>
<span id="L1264" rel="#L1264">1264</span>
<span id="L1265" rel="#L1265">1265</span>
<span id="L1266" rel="#L1266">1266</span>
<span id="L1267" rel="#L1267">1267</span>
<span id="L1268" rel="#L1268">1268</span>
<span id="L1269" rel="#L1269">1269</span>
<span id="L1270" rel="#L1270">1270</span>
<span id="L1271" rel="#L1271">1271</span>
<span id="L1272" rel="#L1272">1272</span>
<span id="L1273" rel="#L1273">1273</span>
<span id="L1274" rel="#L1274">1274</span>
<span id="L1275" rel="#L1275">1275</span>
<span id="L1276" rel="#L1276">1276</span>
<span id="L1277" rel="#L1277">1277</span>
<span id="L1278" rel="#L1278">1278</span>
<span id="L1279" rel="#L1279">1279</span>
<span id="L1280" rel="#L1280">1280</span>
<span id="L1281" rel="#L1281">1281</span>
<span id="L1282" rel="#L1282">1282</span>
<span id="L1283" rel="#L1283">1283</span>
<span id="L1284" rel="#L1284">1284</span>
<span id="L1285" rel="#L1285">1285</span>
<span id="L1286" rel="#L1286">1286</span>
<span id="L1287" rel="#L1287">1287</span>
<span id="L1288" rel="#L1288">1288</span>
<span id="L1289" rel="#L1289">1289</span>
<span id="L1290" rel="#L1290">1290</span>
<span id="L1291" rel="#L1291">1291</span>
<span id="L1292" rel="#L1292">1292</span>
<span id="L1293" rel="#L1293">1293</span>
<span id="L1294" rel="#L1294">1294</span>
<span id="L1295" rel="#L1295">1295</span>
<span id="L1296" rel="#L1296">1296</span>
<span id="L1297" rel="#L1297">1297</span>
<span id="L1298" rel="#L1298">1298</span>
<span id="L1299" rel="#L1299">1299</span>
<span id="L1300" rel="#L1300">1300</span>
<span id="L1301" rel="#L1301">1301</span>
<span id="L1302" rel="#L1302">1302</span>
<span id="L1303" rel="#L1303">1303</span>
<span id="L1304" rel="#L1304">1304</span>
<span id="L1305" rel="#L1305">1305</span>
<span id="L1306" rel="#L1306">1306</span>
<span id="L1307" rel="#L1307">1307</span>
<span id="L1308" rel="#L1308">1308</span>
<span id="L1309" rel="#L1309">1309</span>
<span id="L1310" rel="#L1310">1310</span>
<span id="L1311" rel="#L1311">1311</span>
<span id="L1312" rel="#L1312">1312</span>
<span id="L1313" rel="#L1313">1313</span>
<span id="L1314" rel="#L1314">1314</span>
<span id="L1315" rel="#L1315">1315</span>
<span id="L1316" rel="#L1316">1316</span>
<span id="L1317" rel="#L1317">1317</span>
<span id="L1318" rel="#L1318">1318</span>
<span id="L1319" rel="#L1319">1319</span>
<span id="L1320" rel="#L1320">1320</span>
<span id="L1321" rel="#L1321">1321</span>
<span id="L1322" rel="#L1322">1322</span>
<span id="L1323" rel="#L1323">1323</span>
<span id="L1324" rel="#L1324">1324</span>
<span id="L1325" rel="#L1325">1325</span>
<span id="L1326" rel="#L1326">1326</span>
<span id="L1327" rel="#L1327">1327</span>
<span id="L1328" rel="#L1328">1328</span>
<span id="L1329" rel="#L1329">1329</span>
<span id="L1330" rel="#L1330">1330</span>
<span id="L1331" rel="#L1331">1331</span>
<span id="L1332" rel="#L1332">1332</span>
<span id="L1333" rel="#L1333">1333</span>
<span id="L1334" rel="#L1334">1334</span>
<span id="L1335" rel="#L1335">1335</span>
<span id="L1336" rel="#L1336">1336</span>
<span id="L1337" rel="#L1337">1337</span>
<span id="L1338" rel="#L1338">1338</span>
<span id="L1339" rel="#L1339">1339</span>
<span id="L1340" rel="#L1340">1340</span>
<span id="L1341" rel="#L1341">1341</span>
<span id="L1342" rel="#L1342">1342</span>
<span id="L1343" rel="#L1343">1343</span>
<span id="L1344" rel="#L1344">1344</span>
<span id="L1345" rel="#L1345">1345</span>
<span id="L1346" rel="#L1346">1346</span>
<span id="L1347" rel="#L1347">1347</span>
<span id="L1348" rel="#L1348">1348</span>
<span id="L1349" rel="#L1349">1349</span>
<span id="L1350" rel="#L1350">1350</span>
<span id="L1351" rel="#L1351">1351</span>
<span id="L1352" rel="#L1352">1352</span>
<span id="L1353" rel="#L1353">1353</span>
<span id="L1354" rel="#L1354">1354</span>
<span id="L1355" rel="#L1355">1355</span>
<span id="L1356" rel="#L1356">1356</span>
<span id="L1357" rel="#L1357">1357</span>
<span id="L1358" rel="#L1358">1358</span>
<span id="L1359" rel="#L1359">1359</span>
<span id="L1360" rel="#L1360">1360</span>
<span id="L1361" rel="#L1361">1361</span>
<span id="L1362" rel="#L1362">1362</span>
<span id="L1363" rel="#L1363">1363</span>
<span id="L1364" rel="#L1364">1364</span>
<span id="L1365" rel="#L1365">1365</span>
<span id="L1366" rel="#L1366">1366</span>
<span id="L1367" rel="#L1367">1367</span>
<span id="L1368" rel="#L1368">1368</span>
<span id="L1369" rel="#L1369">1369</span>
<span id="L1370" rel="#L1370">1370</span>
<span id="L1371" rel="#L1371">1371</span>
<span id="L1372" rel="#L1372">1372</span>
<span id="L1373" rel="#L1373">1373</span>
<span id="L1374" rel="#L1374">1374</span>
<span id="L1375" rel="#L1375">1375</span>
<span id="L1376" rel="#L1376">1376</span>
<span id="L1377" rel="#L1377">1377</span>
<span id="L1378" rel="#L1378">1378</span>
<span id="L1379" rel="#L1379">1379</span>
<span id="L1380" rel="#L1380">1380</span>
<span id="L1381" rel="#L1381">1381</span>
<span id="L1382" rel="#L1382">1382</span>
<span id="L1383" rel="#L1383">1383</span>
<span id="L1384" rel="#L1384">1384</span>
<span id="L1385" rel="#L1385">1385</span>
<span id="L1386" rel="#L1386">1386</span>
<span id="L1387" rel="#L1387">1387</span>
<span id="L1388" rel="#L1388">1388</span>
<span id="L1389" rel="#L1389">1389</span>
<span id="L1390" rel="#L1390">1390</span>
<span id="L1391" rel="#L1391">1391</span>
<span id="L1392" rel="#L1392">1392</span>
<span id="L1393" rel="#L1393">1393</span>
<span id="L1394" rel="#L1394">1394</span>
<span id="L1395" rel="#L1395">1395</span>
<span id="L1396" rel="#L1396">1396</span>
<span id="L1397" rel="#L1397">1397</span>
<span id="L1398" rel="#L1398">1398</span>
<span id="L1399" rel="#L1399">1399</span>
<span id="L1400" rel="#L1400">1400</span>
<span id="L1401" rel="#L1401">1401</span>
<span id="L1402" rel="#L1402">1402</span>
<span id="L1403" rel="#L1403">1403</span>
<span id="L1404" rel="#L1404">1404</span>
<span id="L1405" rel="#L1405">1405</span>
<span id="L1406" rel="#L1406">1406</span>
<span id="L1407" rel="#L1407">1407</span>
<span id="L1408" rel="#L1408">1408</span>
<span id="L1409" rel="#L1409">1409</span>
<span id="L1410" rel="#L1410">1410</span>
<span id="L1411" rel="#L1411">1411</span>
<span id="L1412" rel="#L1412">1412</span>
<span id="L1413" rel="#L1413">1413</span>
<span id="L1414" rel="#L1414">1414</span>
<span id="L1415" rel="#L1415">1415</span>
<span id="L1416" rel="#L1416">1416</span>
<span id="L1417" rel="#L1417">1417</span>
<span id="L1418" rel="#L1418">1418</span>
<span id="L1419" rel="#L1419">1419</span>
<span id="L1420" rel="#L1420">1420</span>
<span id="L1421" rel="#L1421">1421</span>
<span id="L1422" rel="#L1422">1422</span>
<span id="L1423" rel="#L1423">1423</span>
<span id="L1424" rel="#L1424">1424</span>
<span id="L1425" rel="#L1425">1425</span>
<span id="L1426" rel="#L1426">1426</span>
<span id="L1427" rel="#L1427">1427</span>
<span id="L1428" rel="#L1428">1428</span>
<span id="L1429" rel="#L1429">1429</span>
<span id="L1430" rel="#L1430">1430</span>
<span id="L1431" rel="#L1431">1431</span>
<span id="L1432" rel="#L1432">1432</span>
<span id="L1433" rel="#L1433">1433</span>
<span id="L1434" rel="#L1434">1434</span>
<span id="L1435" rel="#L1435">1435</span>
<span id="L1436" rel="#L1436">1436</span>
<span id="L1437" rel="#L1437">1437</span>
<span id="L1438" rel="#L1438">1438</span>
<span id="L1439" rel="#L1439">1439</span>
<span id="L1440" rel="#L1440">1440</span>
<span id="L1441" rel="#L1441">1441</span>
<span id="L1442" rel="#L1442">1442</span>
<span id="L1443" rel="#L1443">1443</span>
<span id="L1444" rel="#L1444">1444</span>
<span id="L1445" rel="#L1445">1445</span>
<span id="L1446" rel="#L1446">1446</span>
<span id="L1447" rel="#L1447">1447</span>
<span id="L1448" rel="#L1448">1448</span>
<span id="L1449" rel="#L1449">1449</span>
<span id="L1450" rel="#L1450">1450</span>
<span id="L1451" rel="#L1451">1451</span>
<span id="L1452" rel="#L1452">1452</span>
<span id="L1453" rel="#L1453">1453</span>
<span id="L1454" rel="#L1454">1454</span>
<span id="L1455" rel="#L1455">1455</span>
<span id="L1456" rel="#L1456">1456</span>
<span id="L1457" rel="#L1457">1457</span>
<span id="L1458" rel="#L1458">1458</span>
<span id="L1459" rel="#L1459">1459</span>
<span id="L1460" rel="#L1460">1460</span>
<span id="L1461" rel="#L1461">1461</span>
<span id="L1462" rel="#L1462">1462</span>
<span id="L1463" rel="#L1463">1463</span>
<span id="L1464" rel="#L1464">1464</span>
<span id="L1465" rel="#L1465">1465</span>
<span id="L1466" rel="#L1466">1466</span>
<span id="L1467" rel="#L1467">1467</span>
<span id="L1468" rel="#L1468">1468</span>
<span id="L1469" rel="#L1469">1469</span>
<span id="L1470" rel="#L1470">1470</span>
<span id="L1471" rel="#L1471">1471</span>
<span id="L1472" rel="#L1472">1472</span>
<span id="L1473" rel="#L1473">1473</span>
<span id="L1474" rel="#L1474">1474</span>
<span id="L1475" rel="#L1475">1475</span>
<span id="L1476" rel="#L1476">1476</span>
<span id="L1477" rel="#L1477">1477</span>
<span id="L1478" rel="#L1478">1478</span>
<span id="L1479" rel="#L1479">1479</span>
<span id="L1480" rel="#L1480">1480</span>
<span id="L1481" rel="#L1481">1481</span>
<span id="L1482" rel="#L1482">1482</span>
<span id="L1483" rel="#L1483">1483</span>
<span id="L1484" rel="#L1484">1484</span>
<span id="L1485" rel="#L1485">1485</span>
<span id="L1486" rel="#L1486">1486</span>
<span id="L1487" rel="#L1487">1487</span>
<span id="L1488" rel="#L1488">1488</span>
<span id="L1489" rel="#L1489">1489</span>
<span id="L1490" rel="#L1490">1490</span>
<span id="L1491" rel="#L1491">1491</span>
<span id="L1492" rel="#L1492">1492</span>
<span id="L1493" rel="#L1493">1493</span>
<span id="L1494" rel="#L1494">1494</span>
<span id="L1495" rel="#L1495">1495</span>
<span id="L1496" rel="#L1496">1496</span>
<span id="L1497" rel="#L1497">1497</span>
<span id="L1498" rel="#L1498">1498</span>
<span id="L1499" rel="#L1499">1499</span>
<span id="L1500" rel="#L1500">1500</span>
<span id="L1501" rel="#L1501">1501</span>
<span id="L1502" rel="#L1502">1502</span>
<span id="L1503" rel="#L1503">1503</span>
<span id="L1504" rel="#L1504">1504</span>
<span id="L1505" rel="#L1505">1505</span>
<span id="L1506" rel="#L1506">1506</span>
<span id="L1507" rel="#L1507">1507</span>
<span id="L1508" rel="#L1508">1508</span>
<span id="L1509" rel="#L1509">1509</span>
<span id="L1510" rel="#L1510">1510</span>
<span id="L1511" rel="#L1511">1511</span>
<span id="L1512" rel="#L1512">1512</span>
<span id="L1513" rel="#L1513">1513</span>
<span id="L1514" rel="#L1514">1514</span>
<span id="L1515" rel="#L1515">1515</span>
<span id="L1516" rel="#L1516">1516</span>
<span id="L1517" rel="#L1517">1517</span>
<span id="L1518" rel="#L1518">1518</span>
<span id="L1519" rel="#L1519">1519</span>
<span id="L1520" rel="#L1520">1520</span>
<span id="L1521" rel="#L1521">1521</span>
<span id="L1522" rel="#L1522">1522</span>
<span id="L1523" rel="#L1523">1523</span>
<span id="L1524" rel="#L1524">1524</span>
<span id="L1525" rel="#L1525">1525</span>
<span id="L1526" rel="#L1526">1526</span>
<span id="L1527" rel="#L1527">1527</span>
<span id="L1528" rel="#L1528">1528</span>
<span id="L1529" rel="#L1529">1529</span>
<span id="L1530" rel="#L1530">1530</span>
<span id="L1531" rel="#L1531">1531</span>
<span id="L1532" rel="#L1532">1532</span>
<span id="L1533" rel="#L1533">1533</span>
<span id="L1534" rel="#L1534">1534</span>
<span id="L1535" rel="#L1535">1535</span>
<span id="L1536" rel="#L1536">1536</span>
<span id="L1537" rel="#L1537">1537</span>
<span id="L1538" rel="#L1538">1538</span>
<span id="L1539" rel="#L1539">1539</span>
<span id="L1540" rel="#L1540">1540</span>
<span id="L1541" rel="#L1541">1541</span>
<span id="L1542" rel="#L1542">1542</span>
<span id="L1543" rel="#L1543">1543</span>
<span id="L1544" rel="#L1544">1544</span>
<span id="L1545" rel="#L1545">1545</span>
<span id="L1546" rel="#L1546">1546</span>
<span id="L1547" rel="#L1547">1547</span>
<span id="L1548" rel="#L1548">1548</span>
<span id="L1549" rel="#L1549">1549</span>
<span id="L1550" rel="#L1550">1550</span>
<span id="L1551" rel="#L1551">1551</span>
<span id="L1552" rel="#L1552">1552</span>
<span id="L1553" rel="#L1553">1553</span>
<span id="L1554" rel="#L1554">1554</span>
<span id="L1555" rel="#L1555">1555</span>
<span id="L1556" rel="#L1556">1556</span>
<span id="L1557" rel="#L1557">1557</span>
<span id="L1558" rel="#L1558">1558</span>
<span id="L1559" rel="#L1559">1559</span>
<span id="L1560" rel="#L1560">1560</span>
<span id="L1561" rel="#L1561">1561</span>
<span id="L1562" rel="#L1562">1562</span>
<span id="L1563" rel="#L1563">1563</span>
<span id="L1564" rel="#L1564">1564</span>
<span id="L1565" rel="#L1565">1565</span>
<span id="L1566" rel="#L1566">1566</span>
<span id="L1567" rel="#L1567">1567</span>
<span id="L1568" rel="#L1568">1568</span>
<span id="L1569" rel="#L1569">1569</span>
<span id="L1570" rel="#L1570">1570</span>
<span id="L1571" rel="#L1571">1571</span>
<span id="L1572" rel="#L1572">1572</span>
<span id="L1573" rel="#L1573">1573</span>
<span id="L1574" rel="#L1574">1574</span>
<span id="L1575" rel="#L1575">1575</span>
<span id="L1576" rel="#L1576">1576</span>
<span id="L1577" rel="#L1577">1577</span>
<span id="L1578" rel="#L1578">1578</span>
<span id="L1579" rel="#L1579">1579</span>
<span id="L1580" rel="#L1580">1580</span>

            </td>
            <td class="blob-line-code">
                    <div class="code-body highlight"><pre><div class='line' id='LC1'><span class="c1">//     Backbone.js 1.1.0</span></div><div class='line' id='LC2'><br/></div><div class='line' id='LC3'><span class="c1">//     (c) 2010-2011 Jeremy Ashkenas, DocumentCloud Inc.</span></div><div class='line' id='LC4'><span class="c1">//     (c) 2011-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters &amp; Editors</span></div><div class='line' id='LC5'><span class="c1">//     Backbone may be freely distributed under the MIT license.</span></div><div class='line' id='LC6'><span class="c1">//     For all details and documentation:</span></div><div class='line' id='LC7'><span class="c1">//     http://backbonejs.org</span></div><div class='line' id='LC8'><br/></div><div class='line' id='LC9'><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">root</span><span class="p">,</span> <span class="nx">factory</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC10'>&nbsp;&nbsp;<span class="c1">// Set up Backbone appropriately for the environment.</span></div><div class='line' id='LC11'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">exports</span> <span class="o">!==</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC12'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Node/CommonJS, no need for jQuery in that case.</span></div><div class='line' id='LC13'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">factory</span><span class="p">(</span><span class="nx">root</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;underscore&#39;</span><span class="p">));</span></div><div class='line' id='LC14'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">define</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">define</span><span class="p">.</span><span class="nx">amd</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC15'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// AMD</span></div><div class='line' id='LC16'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">define</span><span class="p">([</span><span class="s1">&#39;underscore&#39;</span><span class="p">,</span> <span class="s1">&#39;jquery&#39;</span><span class="p">,</span> <span class="s1">&#39;exports&#39;</span><span class="p">],</span> <span class="kd">function</span><span class="p">(</span><span class="nx">_</span><span class="p">,</span> <span class="nx">$</span><span class="p">,</span> <span class="nx">exports</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC17'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Export global even in AMD case in case this script is loaded with</span></div><div class='line' id='LC18'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// others that may still expect a global Backbone.</span></div><div class='line' id='LC19'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">root</span><span class="p">.</span><span class="nx">Backbone</span> <span class="o">=</span> <span class="nx">factory</span><span class="p">(</span><span class="nx">root</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">_</span><span class="p">,</span> <span class="nx">$</span><span class="p">);</span></div><div class='line' id='LC20'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC21'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC22'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Browser globals</span></div><div class='line' id='LC23'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">root</span><span class="p">.</span><span class="nx">Backbone</span> <span class="o">=</span> <span class="nx">factory</span><span class="p">(</span><span class="nx">root</span><span class="p">,</span> <span class="p">{},</span> <span class="nx">root</span><span class="p">.</span><span class="nx">_</span><span class="p">,</span> <span class="p">(</span><span class="nx">root</span><span class="p">.</span><span class="nx">jQuery</span> <span class="o">||</span> <span class="nx">root</span><span class="p">.</span><span class="nx">Zepto</span> <span class="o">||</span> <span class="nx">root</span><span class="p">.</span><span class="nx">ender</span> <span class="o">||</span> <span class="nx">root</span><span class="p">.</span><span class="nx">$</span><span class="p">));</span></div><div class='line' id='LC24'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC25'><span class="p">}(</span><span class="k">this</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">root</span><span class="p">,</span> <span class="nx">Backbone</span><span class="p">,</span> <span class="nx">_</span><span class="p">,</span> <span class="nx">$</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC26'><br/></div><div class='line' id='LC27'>&nbsp;&nbsp;<span class="c1">// Initial Setup</span></div><div class='line' id='LC28'>&nbsp;&nbsp;<span class="c1">// -------------</span></div><div class='line' id='LC29'><br/></div><div class='line' id='LC30'>&nbsp;&nbsp;<span class="c1">// Save the previous value of the `Backbone` variable, so that it can be</span></div><div class='line' id='LC31'>&nbsp;&nbsp;<span class="c1">// restored later on, if `noConflict` is used.</span></div><div class='line' id='LC32'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">previousBackbone</span> <span class="o">=</span> <span class="nx">root</span><span class="p">.</span><span class="nx">Backbone</span><span class="p">;</span></div><div class='line' id='LC33'><br/></div><div class='line' id='LC34'>&nbsp;&nbsp;<span class="c1">// Create local references to array methods we&#39;ll want to use later.</span></div><div class='line' id='LC35'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">array</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC36'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">push</span> <span class="o">=</span> <span class="nx">array</span><span class="p">.</span><span class="nx">push</span><span class="p">;</span></div><div class='line' id='LC37'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">slice</span> <span class="o">=</span> <span class="nx">array</span><span class="p">.</span><span class="nx">slice</span><span class="p">;</span></div><div class='line' id='LC38'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">splice</span> <span class="o">=</span> <span class="nx">array</span><span class="p">.</span><span class="nx">splice</span><span class="p">;</span></div><div class='line' id='LC39'><br/></div><div class='line' id='LC40'>&nbsp;&nbsp;<span class="c1">// Current version of the library. Keep in sync with `package.json`.</span></div><div class='line' id='LC41'>&nbsp;&nbsp;<span class="nx">Backbone</span><span class="p">.</span><span class="nx">VERSION</span> <span class="o">=</span> <span class="s1">&#39;1.1.0&#39;</span><span class="p">;</span></div><div class='line' id='LC42'><br/></div><div class='line' id='LC43'>&nbsp;&nbsp;<span class="c1">// For Backbone&#39;s purposes, jQuery, Zepto, or Ender owns the `$` variable.</span></div><div class='line' id='LC44'>&nbsp;&nbsp;<span class="nx">Backbone</span><span class="p">.</span><span class="nx">$</span> <span class="o">=</span> <span class="nx">$</span><span class="p">;</span></div><div class='line' id='LC45'><br/></div><div class='line' id='LC46'>&nbsp;&nbsp;<span class="c1">// Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable</span></div><div class='line' id='LC47'>&nbsp;&nbsp;<span class="c1">// to its previous owner. Returns a reference to this Backbone object.</span></div><div class='line' id='LC48'>&nbsp;&nbsp;<span class="nx">Backbone</span><span class="p">.</span><span class="nx">noConflict</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC49'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">root</span><span class="p">.</span><span class="nx">Backbone</span> <span class="o">=</span> <span class="nx">previousBackbone</span><span class="p">;</span></div><div class='line' id='LC50'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC51'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC52'><br/></div><div class='line' id='LC53'>&nbsp;&nbsp;<span class="c1">// Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option</span></div><div class='line' id='LC54'>&nbsp;&nbsp;<span class="c1">// will fake `&quot;PATCH&quot;`, `&quot;PUT&quot;` and `&quot;DELETE&quot;` requests via the `_method` parameter and</span></div><div class='line' id='LC55'>&nbsp;&nbsp;<span class="c1">// set a `X-Http-Method-Override` header.</span></div><div class='line' id='LC56'>&nbsp;&nbsp;<span class="nx">Backbone</span><span class="p">.</span><span class="nx">emulateHTTP</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC57'><br/></div><div class='line' id='LC58'>&nbsp;&nbsp;<span class="c1">// Turn on `emulateJSON` to support legacy servers that can&#39;t deal with direct</span></div><div class='line' id='LC59'>&nbsp;&nbsp;<span class="c1">// `application/json` requests ... will encode the body as</span></div><div class='line' id='LC60'>&nbsp;&nbsp;<span class="c1">// `application/x-www-form-urlencoded` instead and will send the model in a</span></div><div class='line' id='LC61'>&nbsp;&nbsp;<span class="c1">// form param named `model`.</span></div><div class='line' id='LC62'>&nbsp;&nbsp;<span class="nx">Backbone</span><span class="p">.</span><span class="nx">emulateJSON</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC63'><br/></div><div class='line' id='LC64'>&nbsp;&nbsp;<span class="c1">// Backbone.Events</span></div><div class='line' id='LC65'>&nbsp;&nbsp;<span class="c1">// ---------------</span></div><div class='line' id='LC66'><br/></div><div class='line' id='LC67'>&nbsp;&nbsp;<span class="c1">// A module that can be mixed in to *any object* in order to provide it with</span></div><div class='line' id='LC68'>&nbsp;&nbsp;<span class="c1">// custom events. You may bind with `on` or remove with `off` callback</span></div><div class='line' id='LC69'>&nbsp;&nbsp;<span class="c1">// functions to an event; `trigger`-ing an event fires all callbacks in</span></div><div class='line' id='LC70'>&nbsp;&nbsp;<span class="c1">// succession.</span></div><div class='line' id='LC71'>&nbsp;&nbsp;<span class="c1">//</span></div><div class='line' id='LC72'>&nbsp;&nbsp;<span class="c1">//     var object = {};</span></div><div class='line' id='LC73'>&nbsp;&nbsp;<span class="c1">//     _.extend(object, Backbone.Events);</span></div><div class='line' id='LC74'>&nbsp;&nbsp;<span class="c1">//     object.on(&#39;expand&#39;, function(){ alert(&#39;expanded&#39;); });</span></div><div class='line' id='LC75'>&nbsp;&nbsp;<span class="c1">//     object.trigger(&#39;expand&#39;);</span></div><div class='line' id='LC76'>&nbsp;&nbsp;<span class="c1">//</span></div><div class='line' id='LC77'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">Events</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Events</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC78'><br/></div><div class='line' id='LC79'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Bind an event to a `callback` function. Passing `&quot;all&quot;` will bind</span></div><div class='line' id='LC80'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// the callback to all events fired.</span></div><div class='line' id='LC81'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">on</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">callback</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC82'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">eventsApi</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;on&#39;</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="p">[</span><span class="nx">callback</span><span class="p">,</span> <span class="nx">context</span><span class="p">])</span> <span class="o">||</span> <span class="o">!</span><span class="nx">callback</span><span class="p">)</span> <span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC83'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_events</span> <span class="o">||</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_events</span> <span class="o">=</span> <span class="p">{});</span></div><div class='line' id='LC84'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">events</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_events</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">||</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_events</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="p">[]);</span></div><div class='line' id='LC85'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">events</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span><span class="nx">callback</span><span class="o">:</span> <span class="nx">callback</span><span class="p">,</span> <span class="nx">context</span><span class="o">:</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">ctx</span><span class="o">:</span> <span class="nx">context</span> <span class="o">||</span> <span class="k">this</span><span class="p">});</span></div><div class='line' id='LC86'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC88'><br/></div><div class='line' id='LC89'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Bind an event to only be triggered a single time. After the first time</span></div><div class='line' id='LC90'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// the callback is invoked, it will be removed.</span></div><div class='line' id='LC91'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">once</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">callback</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC92'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">eventsApi</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;once&#39;</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="p">[</span><span class="nx">callback</span><span class="p">,</span> <span class="nx">context</span><span class="p">])</span> <span class="o">||</span> <span class="o">!</span><span class="nx">callback</span><span class="p">)</span> <span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC93'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC94'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">once</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">once</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC95'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">off</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">once</span><span class="p">);</span></div><div class='line' id='LC96'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">callback</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC97'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC98'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">once</span><span class="p">.</span><span class="nx">_callback</span> <span class="o">=</span> <span class="nx">callback</span><span class="p">;</span></div><div class='line' id='LC99'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">once</span><span class="p">,</span> <span class="nx">context</span><span class="p">);</span></div><div class='line' id='LC100'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC101'><br/></div><div class='line' id='LC102'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Remove one or many callbacks. If `context` is null, removes all</span></div><div class='line' id='LC103'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// callbacks with that function. If `callback` is null, removes all</span></div><div class='line' id='LC104'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// callbacks for the event. If `name` is null, removes all bound</span></div><div class='line' id='LC105'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// callbacks for all events.</span></div><div class='line' id='LC106'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">off</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">callback</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC107'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">retain</span><span class="p">,</span> <span class="nx">ev</span><span class="p">,</span> <span class="nx">events</span><span class="p">,</span> <span class="nx">names</span><span class="p">,</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">l</span><span class="p">,</span> <span class="nx">j</span><span class="p">,</span> <span class="nx">k</span><span class="p">;</span></div><div class='line' id='LC108'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">_events</span> <span class="o">||</span> <span class="o">!</span><span class="nx">eventsApi</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;off&#39;</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="p">[</span><span class="nx">callback</span><span class="p">,</span> <span class="nx">context</span><span class="p">]))</span> <span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC109'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">name</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">callback</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC110'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_events</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC111'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC112'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC113'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">names</span> <span class="o">=</span> <span class="nx">name</span> <span class="o">?</span> <span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">:</span> <span class="nx">_</span><span class="p">.</span><span class="nx">keys</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_events</span><span class="p">);</span></div><div class='line' id='LC114'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">l</span> <span class="o">=</span> <span class="nx">names</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC115'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">name</span> <span class="o">=</span> <span class="nx">names</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC116'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">events</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_events</span><span class="p">[</span><span class="nx">name</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC117'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_events</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="nx">retain</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC118'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">callback</span> <span class="o">||</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">k</span> <span class="o">=</span> <span class="nx">events</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">k</span><span class="p">;</span> <span class="nx">j</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ev</span> <span class="o">=</span> <span class="nx">events</span><span class="p">[</span><span class="nx">j</span><span class="p">];</span></div><div class='line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">((</span><span class="nx">callback</span> <span class="o">&amp;&amp;</span> <span class="nx">callback</span> <span class="o">!==</span> <span class="nx">ev</span><span class="p">.</span><span class="nx">callback</span> <span class="o">&amp;&amp;</span> <span class="nx">callback</span> <span class="o">!==</span> <span class="nx">ev</span><span class="p">.</span><span class="nx">callback</span><span class="p">.</span><span class="nx">_callback</span><span class="p">)</span> <span class="o">||</span></div><div class='line' id='LC122'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="nx">context</span> <span class="o">&amp;&amp;</span> <span class="nx">context</span> <span class="o">!==</span> <span class="nx">ev</span><span class="p">.</span><span class="nx">context</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">retain</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">ev</span><span class="p">);</span></div><div class='line' id='LC124'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC125'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC126'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC127'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">retain</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="k">delete</span> <span class="k">this</span><span class="p">.</span><span class="nx">_events</span><span class="p">[</span><span class="nx">name</span><span class="p">];</span></div><div class='line' id='LC128'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC129'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC130'><br/></div><div class='line' id='LC131'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC132'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC133'><br/></div><div class='line' id='LC134'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Trigger one or many events, firing all bound callbacks. Callbacks are</span></div><div class='line' id='LC135'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// passed the same arguments as `trigger` is, apart from the event name</span></div><div class='line' id='LC136'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// (unless you&#39;re listening on `&quot;all&quot;`, which will cause your callback to</span></div><div class='line' id='LC137'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// receive the true name of the event as the first argument).</span></div><div class='line' id='LC138'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">trigger</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC139'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">_events</span><span class="p">)</span> <span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC140'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">args</span> <span class="o">=</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC141'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">eventsApi</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;trigger&#39;</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="nx">args</span><span class="p">))</span> <span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC142'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">events</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_events</span><span class="p">[</span><span class="nx">name</span><span class="p">];</span></div><div class='line' id='LC143'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">allEvents</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_events</span><span class="p">.</span><span class="nx">all</span><span class="p">;</span></div><div class='line' id='LC144'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">events</span><span class="p">)</span> <span class="nx">triggerEvents</span><span class="p">(</span><span class="nx">events</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span></div><div class='line' id='LC145'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">allEvents</span><span class="p">)</span> <span class="nx">triggerEvents</span><span class="p">(</span><span class="nx">allEvents</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC146'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC147'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC148'><br/></div><div class='line' id='LC149'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Tell this object to stop listening to either specific events ... or</span></div><div class='line' id='LC150'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// to every object it&#39;s currently listening to.</span></div><div class='line' id='LC151'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">stopListening</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC152'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">listeningTo</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_listeningTo</span><span class="p">;</span></div><div class='line' id='LC153'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">listeningTo</span><span class="p">)</span> <span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC154'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">remove</span> <span class="o">=</span> <span class="o">!</span><span class="nx">name</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">callback</span><span class="p">;</span></div><div class='line' id='LC155'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">callback</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">name</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="nx">callback</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC156'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">(</span><span class="nx">listeningTo</span> <span class="o">=</span> <span class="p">{})[</span><span class="nx">obj</span><span class="p">.</span><span class="nx">_listenId</span><span class="p">]</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC157'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">id</span> <span class="k">in</span> <span class="nx">listeningTo</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC158'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">obj</span> <span class="o">=</span> <span class="nx">listeningTo</span><span class="p">[</span><span class="nx">id</span><span class="p">];</span></div><div class='line' id='LC159'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">obj</span><span class="p">.</span><span class="nx">off</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">callback</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC160'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">remove</span> <span class="o">||</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isEmpty</span><span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">_events</span><span class="p">))</span> <span class="k">delete</span> <span class="k">this</span><span class="p">.</span><span class="nx">_listeningTo</span><span class="p">[</span><span class="nx">id</span><span class="p">];</span></div><div class='line' id='LC161'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC162'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC163'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC164'><br/></div><div class='line' id='LC165'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC166'><br/></div><div class='line' id='LC167'>&nbsp;&nbsp;<span class="c1">// Regular expression used to split event strings.</span></div><div class='line' id='LC168'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">eventSplitter</span> <span class="o">=</span> <span class="sr">/\s+/</span><span class="p">;</span></div><div class='line' id='LC169'><br/></div><div class='line' id='LC170'>&nbsp;&nbsp;<span class="c1">// Implement fancy features of the Events API such as multiple event</span></div><div class='line' id='LC171'>&nbsp;&nbsp;<span class="c1">// names `&quot;change blur&quot;` and jQuery-style event maps `{change: action}`</span></div><div class='line' id='LC172'>&nbsp;&nbsp;<span class="c1">// in terms of the existing API.</span></div><div class='line' id='LC173'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">eventsApi</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">action</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="nx">rest</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC174'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">name</span><span class="p">)</span> <span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC175'><br/></div><div class='line' id='LC176'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Handle event maps.</span></div><div class='line' id='LC177'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">name</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC178'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">name</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC179'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">obj</span><span class="p">[</span><span class="nx">action</span><span class="p">].</span><span class="nx">apply</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="p">[</span><span class="nx">key</span><span class="p">,</span> <span class="nx">name</span><span class="p">[</span><span class="nx">key</span><span class="p">]].</span><span class="nx">concat</span><span class="p">(</span><span class="nx">rest</span><span class="p">));</span></div><div class='line' id='LC180'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC181'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC182'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC183'><br/></div><div class='line' id='LC184'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Handle space separated event names.</span></div><div class='line' id='LC185'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">eventSplitter</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">name</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC186'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">names</span> <span class="o">=</span> <span class="nx">name</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="nx">eventSplitter</span><span class="p">);</span></div><div class='line' id='LC187'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">l</span> <span class="o">=</span> <span class="nx">names</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC188'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">obj</span><span class="p">[</span><span class="nx">action</span><span class="p">].</span><span class="nx">apply</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="p">[</span><span class="nx">names</span><span class="p">[</span><span class="nx">i</span><span class="p">]].</span><span class="nx">concat</span><span class="p">(</span><span class="nx">rest</span><span class="p">));</span></div><div class='line' id='LC189'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC190'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC191'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC192'><br/></div><div class='line' id='LC193'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC194'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC195'><br/></div><div class='line' id='LC196'>&nbsp;&nbsp;<span class="c1">// A difficult-to-believe, but optimized internal dispatch function for</span></div><div class='line' id='LC197'>&nbsp;&nbsp;<span class="c1">// triggering events. Tries to keep the usual cases speedy (most internal</span></div><div class='line' id='LC198'>&nbsp;&nbsp;<span class="c1">// Backbone events have 3 arguments).</span></div><div class='line' id='LC199'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">triggerEvents</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">events</span><span class="p">,</span> <span class="nx">args</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC200'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">ev</span><span class="p">,</span> <span class="nx">i</span> <span class="o">=</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="nx">l</span> <span class="o">=</span> <span class="nx">events</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span> <span class="nx">a1</span> <span class="o">=</span> <span class="nx">args</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="nx">a2</span> <span class="o">=</span> <span class="nx">args</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span> <span class="nx">a3</span> <span class="o">=</span> <span class="nx">args</span><span class="p">[</span><span class="mi">2</span><span class="p">];</span></div><div class='line' id='LC201'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">switch</span> <span class="p">(</span><span class="nx">args</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC202'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="mi">0</span><span class="o">:</span> <span class="k">while</span> <span class="p">(</span><span class="o">++</span><span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">)</span> <span class="p">(</span><span class="nx">ev</span> <span class="o">=</span> <span class="nx">events</span><span class="p">[</span><span class="nx">i</span><span class="p">]).</span><span class="nx">callback</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">ev</span><span class="p">.</span><span class="nx">ctx</span><span class="p">);</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC203'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="mi">1</span><span class="o">:</span> <span class="k">while</span> <span class="p">(</span><span class="o">++</span><span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">)</span> <span class="p">(</span><span class="nx">ev</span> <span class="o">=</span> <span class="nx">events</span><span class="p">[</span><span class="nx">i</span><span class="p">]).</span><span class="nx">callback</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">ev</span><span class="p">.</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">a1</span><span class="p">);</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC204'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="mi">2</span><span class="o">:</span> <span class="k">while</span> <span class="p">(</span><span class="o">++</span><span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">)</span> <span class="p">(</span><span class="nx">ev</span> <span class="o">=</span> <span class="nx">events</span><span class="p">[</span><span class="nx">i</span><span class="p">]).</span><span class="nx">callback</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">ev</span><span class="p">.</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">a1</span><span class="p">,</span> <span class="nx">a2</span><span class="p">);</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC205'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="mi">3</span><span class="o">:</span> <span class="k">while</span> <span class="p">(</span><span class="o">++</span><span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">)</span> <span class="p">(</span><span class="nx">ev</span> <span class="o">=</span> <span class="nx">events</span><span class="p">[</span><span class="nx">i</span><span class="p">]).</span><span class="nx">callback</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">ev</span><span class="p">.</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">a1</span><span class="p">,</span> <span class="nx">a2</span><span class="p">,</span> <span class="nx">a3</span><span class="p">);</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC206'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">default</span><span class="o">:</span> <span class="k">while</span> <span class="p">(</span><span class="o">++</span><span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">)</span> <span class="p">(</span><span class="nx">ev</span> <span class="o">=</span> <span class="nx">events</span><span class="p">[</span><span class="nx">i</span><span class="p">]).</span><span class="nx">callback</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">ev</span><span class="p">.</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span></div><div class='line' id='LC207'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC208'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC209'><br/></div><div class='line' id='LC210'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">listenMethods</span> <span class="o">=</span> <span class="p">{</span><span class="nx">listenTo</span><span class="o">:</span> <span class="s1">&#39;on&#39;</span><span class="p">,</span> <span class="nx">listenToOnce</span><span class="o">:</span> <span class="s1">&#39;once&#39;</span><span class="p">};</span></div><div class='line' id='LC211'><br/></div><div class='line' id='LC212'>&nbsp;&nbsp;<span class="c1">// Inversion-of-control versions of `on` and `once`. Tell *this* object to</span></div><div class='line' id='LC213'>&nbsp;&nbsp;<span class="c1">// listen to an event in another object ... keeping track of what it&#39;s</span></div><div class='line' id='LC214'>&nbsp;&nbsp;<span class="c1">// listening to.</span></div><div class='line' id='LC215'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">listenMethods</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">implementation</span><span class="p">,</span> <span class="nx">method</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC216'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Events</span><span class="p">[</span><span class="nx">method</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC217'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">listeningTo</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_listeningTo</span> <span class="o">||</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_listeningTo</span> <span class="o">=</span> <span class="p">{});</span></div><div class='line' id='LC218'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">id</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">_listenId</span> <span class="o">||</span> <span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">_listenId</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">uniqueId</span><span class="p">(</span><span class="s1">&#39;l&#39;</span><span class="p">));</span></div><div class='line' id='LC219'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">listeningTo</span><span class="p">[</span><span class="nx">id</span><span class="p">]</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC220'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">callback</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">name</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="nx">callback</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC221'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">obj</span><span class="p">[</span><span class="nx">implementation</span><span class="p">](</span><span class="nx">name</span><span class="p">,</span> <span class="nx">callback</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC222'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC223'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC224'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC225'><br/></div><div class='line' id='LC226'>&nbsp;&nbsp;<span class="c1">// Aliases for backwards compatibility.</span></div><div class='line' id='LC227'>&nbsp;&nbsp;<span class="nx">Events</span><span class="p">.</span><span class="nx">bind</span>   <span class="o">=</span> <span class="nx">Events</span><span class="p">.</span><span class="nx">on</span><span class="p">;</span></div><div class='line' id='LC228'>&nbsp;&nbsp;<span class="nx">Events</span><span class="p">.</span><span class="nx">unbind</span> <span class="o">=</span> <span class="nx">Events</span><span class="p">.</span><span class="nx">off</span><span class="p">;</span></div><div class='line' id='LC229'><br/></div><div class='line' id='LC230'>&nbsp;&nbsp;<span class="c1">// Allow the `Backbone` object to serve as a global event bus, for folks who</span></div><div class='line' id='LC231'>&nbsp;&nbsp;<span class="c1">// want global &quot;pubsub&quot; in a convenient place.</span></div><div class='line' id='LC232'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">Backbone</span><span class="p">,</span> <span class="nx">Events</span><span class="p">);</span></div><div class='line' id='LC233'><br/></div><div class='line' id='LC234'>&nbsp;&nbsp;<span class="c1">// Backbone.Model</span></div><div class='line' id='LC235'>&nbsp;&nbsp;<span class="c1">// --------------</span></div><div class='line' id='LC236'><br/></div><div class='line' id='LC237'>&nbsp;&nbsp;<span class="c1">// Backbone **Models** are the basic data object in the framework --</span></div><div class='line' id='LC238'>&nbsp;&nbsp;<span class="c1">// frequently representing a row in a table in a database on your server.</span></div><div class='line' id='LC239'>&nbsp;&nbsp;<span class="c1">// A discrete chunk of data and a bunch of useful, related methods for</span></div><div class='line' id='LC240'>&nbsp;&nbsp;<span class="c1">// performing computations and transformations on that data.</span></div><div class='line' id='LC241'><br/></div><div class='line' id='LC242'>&nbsp;&nbsp;<span class="c1">// Create a new model with the specified attributes. A client id (`cid`)</span></div><div class='line' id='LC243'>&nbsp;&nbsp;<span class="c1">// is automatically generated and assigned for you.</span></div><div class='line' id='LC244'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">Model</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Model</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">attributes</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC245'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">attrs</span> <span class="o">=</span> <span class="nx">attributes</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC246'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">||</span> <span class="p">(</span><span class="nx">options</span> <span class="o">=</span> <span class="p">{});</span></div><div class='line' id='LC247'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">cid</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">uniqueId</span><span class="p">(</span><span class="s1">&#39;c&#39;</span><span class="p">);</span></div><div class='line' id='LC248'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">attributes</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC249'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">collection</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">collection</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">collection</span><span class="p">;</span></div><div class='line' id='LC250'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">parse</span><span class="p">)</span> <span class="nx">attrs</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">attrs</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC251'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">attrs</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">defaults</span><span class="p">({},</span> <span class="nx">attrs</span><span class="p">,</span> <span class="nx">_</span><span class="p">.</span><span class="nx">result</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;defaults&#39;</span><span class="p">));</span></div><div class='line' id='LC252'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="nx">attrs</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC253'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">changed</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC254'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">initialize</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC255'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC256'><br/></div><div class='line' id='LC257'>&nbsp;&nbsp;<span class="c1">// Attach all inheritable methods to the Model prototype.</span></div><div class='line' id='LC258'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">Model</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="nx">Events</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC259'><br/></div><div class='line' id='LC260'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// A hash of attributes whose current and previous value differ.</span></div><div class='line' id='LC261'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">changed</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC262'><br/></div><div class='line' id='LC263'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// The value returned during the last failed validation.</span></div><div class='line' id='LC264'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">validationError</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC265'><br/></div><div class='line' id='LC266'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// The default name for the JSON `id` attribute is `&quot;id&quot;`. MongoDB and</span></div><div class='line' id='LC267'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// CouchDB users may want to set this to `&quot;_id&quot;`.</span></div><div class='line' id='LC268'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">idAttribute</span><span class="o">:</span> <span class="s1">&#39;id&#39;</span><span class="p">,</span></div><div class='line' id='LC269'><br/></div><div class='line' id='LC270'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Initialize is an empty function by default. Override it with your own</span></div><div class='line' id='LC271'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// initialization logic.</span></div><div class='line' id='LC272'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">initialize</span><span class="o">:</span> <span class="kd">function</span><span class="p">(){},</span></div><div class='line' id='LC273'><br/></div><div class='line' id='LC274'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Return a copy of the model&#39;s `attributes` object.</span></div><div class='line' id='LC275'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toJSON</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC276'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">clone</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">attributes</span><span class="p">);</span></div><div class='line' id='LC277'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC278'><br/></div><div class='line' id='LC279'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Proxy `Backbone.sync` by default -- but override this if you need</span></div><div class='line' id='LC280'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// custom syncing semantics for *this* particular model.</span></div><div class='line' id='LC281'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">sync</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC282'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">sync</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC283'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC284'><br/></div><div class='line' id='LC285'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Get the value of an attribute.</span></div><div class='line' id='LC286'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">get</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">attr</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC287'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">attributes</span><span class="p">[</span><span class="nx">attr</span><span class="p">];</span></div><div class='line' id='LC288'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC289'><br/></div><div class='line' id='LC290'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Get the HTML-escaped value of an attribute.</span></div><div class='line' id='LC291'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">escape</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">attr</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC292'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">escape</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="nx">attr</span><span class="p">));</span></div><div class='line' id='LC293'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC294'><br/></div><div class='line' id='LC295'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Returns `true` if the attribute contains a value that is not null</span></div><div class='line' id='LC296'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// or undefined.</span></div><div class='line' id='LC297'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">has</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">attr</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC298'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="nx">attr</span><span class="p">)</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC299'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC300'><br/></div><div class='line' id='LC301'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Set a hash of model attributes on the object, firing `&quot;change&quot;`. This is</span></div><div class='line' id='LC302'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// the core primitive operation of a model, updating the data and notifying</span></div><div class='line' id='LC303'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// anyone who needs to know about the change in state. The heart of the beast.</span></div><div class='line' id='LC304'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">set</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">val</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC305'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">attr</span><span class="p">,</span> <span class="nx">attrs</span><span class="p">,</span> <span class="nx">unset</span><span class="p">,</span> <span class="nx">changes</span><span class="p">,</span> <span class="nx">silent</span><span class="p">,</span> <span class="nx">changing</span><span class="p">,</span> <span class="nx">prev</span><span class="p">,</span> <span class="nx">current</span><span class="p">;</span></div><div class='line' id='LC306'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">key</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC307'><br/></div><div class='line' id='LC308'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Handle both `&quot;key&quot;, value` and `{key: value}` -style arguments.</span></div><div class='line' id='LC309'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">key</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC310'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">attrs</span> <span class="o">=</span> <span class="nx">key</span><span class="p">;</span></div><div class='line' id='LC311'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="nx">val</span><span class="p">;</span></div><div class='line' id='LC312'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC313'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="nx">attrs</span> <span class="o">=</span> <span class="p">{})[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">val</span><span class="p">;</span></div><div class='line' id='LC314'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC315'><br/></div><div class='line' id='LC316'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">||</span> <span class="p">(</span><span class="nx">options</span> <span class="o">=</span> <span class="p">{});</span></div><div class='line' id='LC317'><br/></div><div class='line' id='LC318'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Run validation.</span></div><div class='line' id='LC319'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">_validate</span><span class="p">(</span><span class="nx">attrs</span><span class="p">,</span> <span class="nx">options</span><span class="p">))</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC320'><br/></div><div class='line' id='LC321'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Extract attributes and options.</span></div><div class='line' id='LC322'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">unset</span>           <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">unset</span><span class="p">;</span></div><div class='line' id='LC323'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">silent</span>          <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">silent</span><span class="p">;</span></div><div class='line' id='LC324'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">changes</span>         <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC325'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">changing</span>        <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_changing</span><span class="p">;</span></div><div class='line' id='LC326'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_changing</span>  <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC327'><br/></div><div class='line' id='LC328'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">changing</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC329'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_previousAttributes</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">clone</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">attributes</span><span class="p">);</span></div><div class='line' id='LC330'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">changed</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC331'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC332'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">current</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">attributes</span><span class="p">,</span> <span class="nx">prev</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_previousAttributes</span><span class="p">;</span></div><div class='line' id='LC333'><br/></div><div class='line' id='LC334'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Check for changes of `id`.</span></div><div class='line' id='LC335'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">idAttribute</span> <span class="k">in</span> <span class="nx">attrs</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">id</span> <span class="o">=</span> <span class="nx">attrs</span><span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">idAttribute</span><span class="p">];</span></div><div class='line' id='LC336'><br/></div><div class='line' id='LC337'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// For each `set` attribute, update or delete the current value.</span></div><div class='line' id='LC338'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">attr</span> <span class="k">in</span> <span class="nx">attrs</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC339'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">val</span> <span class="o">=</span> <span class="nx">attrs</span><span class="p">[</span><span class="nx">attr</span><span class="p">];</span></div><div class='line' id='LC340'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">isEqual</span><span class="p">(</span><span class="nx">current</span><span class="p">[</span><span class="nx">attr</span><span class="p">],</span> <span class="nx">val</span><span class="p">))</span> <span class="nx">changes</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">attr</span><span class="p">);</span></div><div class='line' id='LC341'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">isEqual</span><span class="p">(</span><span class="nx">prev</span><span class="p">[</span><span class="nx">attr</span><span class="p">],</span> <span class="nx">val</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC342'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">changed</span><span class="p">[</span><span class="nx">attr</span><span class="p">]</span> <span class="o">=</span> <span class="nx">val</span><span class="p">;</span></div><div class='line' id='LC343'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC344'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">delete</span> <span class="k">this</span><span class="p">.</span><span class="nx">changed</span><span class="p">[</span><span class="nx">attr</span><span class="p">];</span></div><div class='line' id='LC345'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC346'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">unset</span> <span class="o">?</span> <span class="k">delete</span> <span class="nx">current</span><span class="p">[</span><span class="nx">attr</span><span class="p">]</span> <span class="o">:</span> <span class="nx">current</span><span class="p">[</span><span class="nx">attr</span><span class="p">]</span> <span class="o">=</span> <span class="nx">val</span><span class="p">;</span></div><div class='line' id='LC347'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC348'><br/></div><div class='line' id='LC349'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Trigger all relevant attribute changes.</span></div><div class='line' id='LC350'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">silent</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC351'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">changes</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">_pending</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC352'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">l</span> <span class="o">=</span> <span class="nx">changes</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC353'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;change:&#39;</span> <span class="o">+</span> <span class="nx">changes</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span> <span class="k">this</span><span class="p">,</span> <span class="nx">current</span><span class="p">[</span><span class="nx">changes</span><span class="p">[</span><span class="nx">i</span><span class="p">]],</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC354'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC355'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC356'><br/></div><div class='line' id='LC357'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// You might be wondering why there&#39;s a `while` loop here. Changes can</span></div><div class='line' id='LC358'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// be recursively nested within `&quot;change&quot;` events.</span></div><div class='line' id='LC359'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">changing</span><span class="p">)</span> <span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC360'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">silent</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC361'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_pending</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC362'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_pending</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC363'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;change&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC364'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC365'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC366'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_pending</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC367'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_changing</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC368'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC369'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC370'><br/></div><div class='line' id='LC371'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Remove an attribute from the model, firing `&quot;change&quot;`. `unset` is a noop</span></div><div class='line' id='LC372'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// if the attribute doesn&#39;t exist.</span></div><div class='line' id='LC373'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">unset</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">attr</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC374'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="nx">attr</span><span class="p">,</span> <span class="k">void</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="nx">options</span><span class="p">,</span> <span class="p">{</span><span class="nx">unset</span><span class="o">:</span> <span class="kc">true</span><span class="p">}));</span></div><div class='line' id='LC375'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC376'><br/></div><div class='line' id='LC377'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Clear all attributes on the model, firing `&quot;change&quot;`.</span></div><div class='line' id='LC378'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">clear</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC379'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">attrs</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC380'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="k">this</span><span class="p">.</span><span class="nx">attributes</span><span class="p">)</span> <span class="nx">attrs</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC381'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="nx">attrs</span><span class="p">,</span> <span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="nx">options</span><span class="p">,</span> <span class="p">{</span><span class="nx">unset</span><span class="o">:</span> <span class="kc">true</span><span class="p">}));</span></div><div class='line' id='LC382'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC383'><br/></div><div class='line' id='LC384'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Determine if the model has changed since the last `&quot;change&quot;` event.</span></div><div class='line' id='LC385'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If you specify an attribute name, determine if that attribute has changed.</span></div><div class='line' id='LC386'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">hasChanged</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">attr</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC387'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">attr</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">isEmpty</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">changed</span><span class="p">);</span></div><div class='line' id='LC388'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">has</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">changed</span><span class="p">,</span> <span class="nx">attr</span><span class="p">);</span></div><div class='line' id='LC389'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC390'><br/></div><div class='line' id='LC391'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Return an object containing all the attributes that have changed, or</span></div><div class='line' id='LC392'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// false if there are no changed attributes. Useful for determining what</span></div><div class='line' id='LC393'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// parts of a view need to be updated and/or what attributes need to be</span></div><div class='line' id='LC394'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// persisted to the server. Unset attributes will be set to undefined.</span></div><div class='line' id='LC395'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// You can also pass an attributes object to diff against the model,</span></div><div class='line' id='LC396'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// determining if there *would be* a change.</span></div><div class='line' id='LC397'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">changedAttributes</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">diff</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC398'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">diff</span><span class="p">)</span> <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">hasChanged</span><span class="p">()</span> <span class="o">?</span> <span class="nx">_</span><span class="p">.</span><span class="nx">clone</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">changed</span><span class="p">)</span> <span class="o">:</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC399'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">val</span><span class="p">,</span> <span class="nx">changed</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC400'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">old</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_changing</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">_previousAttributes</span> <span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">attributes</span><span class="p">;</span></div><div class='line' id='LC401'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">attr</span> <span class="k">in</span> <span class="nx">diff</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC402'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isEqual</span><span class="p">(</span><span class="nx">old</span><span class="p">[</span><span class="nx">attr</span><span class="p">],</span> <span class="p">(</span><span class="nx">val</span> <span class="o">=</span> <span class="nx">diff</span><span class="p">[</span><span class="nx">attr</span><span class="p">])))</span> <span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC403'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="nx">changed</span> <span class="o">||</span> <span class="p">(</span><span class="nx">changed</span> <span class="o">=</span> <span class="p">{}))[</span><span class="nx">attr</span><span class="p">]</span> <span class="o">=</span> <span class="nx">val</span><span class="p">;</span></div><div class='line' id='LC404'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC405'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">changed</span><span class="p">;</span></div><div class='line' id='LC406'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC407'><br/></div><div class='line' id='LC408'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Get the previous value of an attribute, recorded at the time the last</span></div><div class='line' id='LC409'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// `&quot;change&quot;` event was fired.</span></div><div class='line' id='LC410'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">previous</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">attr</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC411'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">attr</span> <span class="o">==</span> <span class="kc">null</span> <span class="o">||</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">_previousAttributes</span><span class="p">)</span> <span class="k">return</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC412'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">_previousAttributes</span><span class="p">[</span><span class="nx">attr</span><span class="p">];</span></div><div class='line' id='LC413'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC414'><br/></div><div class='line' id='LC415'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Get all of the attributes of the model at the time of the previous</span></div><div class='line' id='LC416'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// `&quot;change&quot;` event.</span></div><div class='line' id='LC417'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">previousAttributes</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC418'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">clone</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_previousAttributes</span><span class="p">);</span></div><div class='line' id='LC419'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC420'><br/></div><div class='line' id='LC421'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Fetch the model from the server. If the server&#39;s representation of the</span></div><div class='line' id='LC422'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// model differs from its current attributes, they will be overridden,</span></div><div class='line' id='LC423'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// triggering a `&quot;change&quot;` event.</span></div><div class='line' id='LC424'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fetch</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC425'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="nx">options</span> <span class="o">?</span> <span class="nx">_</span><span class="p">.</span><span class="nx">clone</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="o">:</span> <span class="p">{};</span></div><div class='line' id='LC426'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">parse</span> <span class="o">===</span> <span class="k">void</span> <span class="mi">0</span><span class="p">)</span> <span class="nx">options</span><span class="p">.</span><span class="nx">parse</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC427'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">model</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC428'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">success</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">success</span><span class="p">;</span></div><div class='line' id='LC429'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">success</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">resp</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC430'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">model</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="nx">model</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">resp</span><span class="p">,</span> <span class="nx">options</span><span class="p">),</span> <span class="nx">options</span><span class="p">))</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC431'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">success</span><span class="p">)</span> <span class="nx">success</span><span class="p">(</span><span class="nx">model</span><span class="p">,</span> <span class="nx">resp</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC432'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">model</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;sync&#39;</span><span class="p">,</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">resp</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC433'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC434'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">wrapError</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC435'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">sync</span><span class="p">(</span><span class="s1">&#39;read&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC436'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC437'><br/></div><div class='line' id='LC438'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Set a hash of model attributes, and sync the model to the server.</span></div><div class='line' id='LC439'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If the server returns an attributes hash that differs, the model&#39;s</span></div><div class='line' id='LC440'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// state will be `set` again.</span></div><div class='line' id='LC441'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">save</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">val</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC442'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">attrs</span><span class="p">,</span> <span class="nx">method</span><span class="p">,</span> <span class="nx">xhr</span><span class="p">,</span> <span class="nx">attributes</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">attributes</span><span class="p">;</span></div><div class='line' id='LC443'><br/></div><div class='line' id='LC444'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Handle both `&quot;key&quot;, value` and `{key: value}` -style arguments.</span></div><div class='line' id='LC445'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">key</span> <span class="o">==</span> <span class="kc">null</span> <span class="o">||</span> <span class="k">typeof</span> <span class="nx">key</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC446'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">attrs</span> <span class="o">=</span> <span class="nx">key</span><span class="p">;</span></div><div class='line' id='LC447'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="nx">val</span><span class="p">;</span></div><div class='line' id='LC448'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC449'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="nx">attrs</span> <span class="o">=</span> <span class="p">{})[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">val</span><span class="p">;</span></div><div class='line' id='LC450'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC451'><br/></div><div class='line' id='LC452'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span><span class="nx">validate</span><span class="o">:</span> <span class="kc">true</span><span class="p">},</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC453'><br/></div><div class='line' id='LC454'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If we&#39;re not waiting and attributes exist, save acts as</span></div><div class='line' id='LC455'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// `set(attr).save(null, opts)` with validation. Otherwise, check if</span></div><div class='line' id='LC456'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// the model will be valid when the attributes, if any, are set.</span></div><div class='line' id='LC457'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">attrs</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">options</span><span class="p">.</span><span class="nx">wait</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC458'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="nx">attrs</span><span class="p">,</span> <span class="nx">options</span><span class="p">))</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC459'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC460'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">_validate</span><span class="p">(</span><span class="nx">attrs</span><span class="p">,</span> <span class="nx">options</span><span class="p">))</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC461'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC462'><br/></div><div class='line' id='LC463'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Set temporary attributes if `{wait: true}`.</span></div><div class='line' id='LC464'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">attrs</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">wait</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC465'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">attributes</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="nx">attributes</span><span class="p">,</span> <span class="nx">attrs</span><span class="p">);</span></div><div class='line' id='LC466'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC467'><br/></div><div class='line' id='LC468'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// After a successful server-side save, the client is (optionally)</span></div><div class='line' id='LC469'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// updated with the server-side state.</span></div><div class='line' id='LC470'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">parse</span> <span class="o">===</span> <span class="k">void</span> <span class="mi">0</span><span class="p">)</span> <span class="nx">options</span><span class="p">.</span><span class="nx">parse</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC471'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">model</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC472'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">success</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">success</span><span class="p">;</span></div><div class='line' id='LC473'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">success</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">resp</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC474'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Ensure attributes are restored during synchronous saves.</span></div><div class='line' id='LC475'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">model</span><span class="p">.</span><span class="nx">attributes</span> <span class="o">=</span> <span class="nx">attributes</span><span class="p">;</span></div><div class='line' id='LC476'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">serverAttrs</span> <span class="o">=</span> <span class="nx">model</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">resp</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC477'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">wait</span><span class="p">)</span> <span class="nx">serverAttrs</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">attrs</span> <span class="o">||</span> <span class="p">{},</span> <span class="nx">serverAttrs</span><span class="p">);</span></div><div class='line' id='LC478'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isObject</span><span class="p">(</span><span class="nx">serverAttrs</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">model</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="nx">serverAttrs</span><span class="p">,</span> <span class="nx">options</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC479'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC480'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC481'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">success</span><span class="p">)</span> <span class="nx">success</span><span class="p">(</span><span class="nx">model</span><span class="p">,</span> <span class="nx">resp</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC482'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">model</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;sync&#39;</span><span class="p">,</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">resp</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC483'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC484'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">wrapError</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC485'><br/></div><div class='line' id='LC486'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">method</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">isNew</span><span class="p">()</span> <span class="o">?</span> <span class="s1">&#39;create&#39;</span> <span class="o">:</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">patch</span> <span class="o">?</span> <span class="s1">&#39;patch&#39;</span> <span class="o">:</span> <span class="s1">&#39;update&#39;</span><span class="p">);</span></div><div class='line' id='LC487'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">method</span> <span class="o">===</span> <span class="s1">&#39;patch&#39;</span><span class="p">)</span> <span class="nx">options</span><span class="p">.</span><span class="nx">attrs</span> <span class="o">=</span> <span class="nx">attrs</span><span class="p">;</span></div><div class='line' id='LC488'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">xhr</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">sync</span><span class="p">(</span><span class="nx">method</span><span class="p">,</span> <span class="k">this</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC489'><br/></div><div class='line' id='LC490'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Restore attributes.</span></div><div class='line' id='LC491'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">attrs</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">wait</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">attributes</span> <span class="o">=</span> <span class="nx">attributes</span><span class="p">;</span></div><div class='line' id='LC492'><br/></div><div class='line' id='LC493'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">xhr</span><span class="p">;</span></div><div class='line' id='LC494'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC495'><br/></div><div class='line' id='LC496'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Destroy this model on the server if it was already persisted.</span></div><div class='line' id='LC497'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Optimistically removes the model from its collection, if it has one.</span></div><div class='line' id='LC498'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If `wait: true` is passed, waits for the server to respond before removal.</span></div><div class='line' id='LC499'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">destroy</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC500'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="nx">options</span> <span class="o">?</span> <span class="nx">_</span><span class="p">.</span><span class="nx">clone</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="o">:</span> <span class="p">{};</span></div><div class='line' id='LC501'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">model</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC502'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">success</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">success</span><span class="p">;</span></div><div class='line' id='LC503'><br/></div><div class='line' id='LC504'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">destroy</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC505'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">model</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;destroy&#39;</span><span class="p">,</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">model</span><span class="p">.</span><span class="nx">collection</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC506'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC507'><br/></div><div class='line' id='LC508'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">success</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">resp</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC509'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">wait</span> <span class="o">||</span> <span class="nx">model</span><span class="p">.</span><span class="nx">isNew</span><span class="p">())</span> <span class="nx">destroy</span><span class="p">();</span></div><div class='line' id='LC510'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">success</span><span class="p">)</span> <span class="nx">success</span><span class="p">(</span><span class="nx">model</span><span class="p">,</span> <span class="nx">resp</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC511'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">model</span><span class="p">.</span><span class="nx">isNew</span><span class="p">())</span> <span class="nx">model</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;sync&#39;</span><span class="p">,</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">resp</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC512'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC513'><br/></div><div class='line' id='LC514'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isNew</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC515'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">success</span><span class="p">();</span></div><div class='line' id='LC516'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC517'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC518'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">wrapError</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC519'><br/></div><div class='line' id='LC520'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">xhr</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">sync</span><span class="p">(</span><span class="s1">&#39;delete&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC521'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">options</span><span class="p">.</span><span class="nx">wait</span><span class="p">)</span> <span class="nx">destroy</span><span class="p">();</span></div><div class='line' id='LC522'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">xhr</span><span class="p">;</span></div><div class='line' id='LC523'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC524'><br/></div><div class='line' id='LC525'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Default URL for the model&#39;s representation on the server -- if you&#39;re</span></div><div class='line' id='LC526'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// using Backbone&#39;s restful methods, override this to change the endpoint</span></div><div class='line' id='LC527'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// that will be called.</span></div><div class='line' id='LC528'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC529'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">base</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">result</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;urlRoot&#39;</span><span class="p">)</span> <span class="o">||</span> <span class="nx">_</span><span class="p">.</span><span class="nx">result</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">collection</span><span class="p">,</span> <span class="s1">&#39;url&#39;</span><span class="p">)</span> <span class="o">||</span> <span class="nx">urlError</span><span class="p">();</span></div><div class='line' id='LC530'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isNew</span><span class="p">())</span> <span class="k">return</span> <span class="nx">base</span><span class="p">;</span></div><div class='line' id='LC531'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">base</span> <span class="o">+</span> <span class="p">(</span><span class="nx">base</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">base</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)</span> <span class="o">===</span> <span class="s1">&#39;/&#39;</span> <span class="o">?</span> <span class="s1">&#39;&#39;</span> <span class="o">:</span> <span class="s1">&#39;/&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">id</span><span class="p">);</span></div><div class='line' id='LC532'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC533'><br/></div><div class='line' id='LC534'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// **parse** converts a response into the hash of attributes to be `set` on</span></div><div class='line' id='LC535'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// the model. The default implementation is just to pass the response along.</span></div><div class='line' id='LC536'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">parse</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">resp</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC537'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">resp</span><span class="p">;</span></div><div class='line' id='LC538'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC539'><br/></div><div class='line' id='LC540'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Create a new model with identical attributes to this one.</span></div><div class='line' id='LC541'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">clone</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC542'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="k">this</span><span class="p">.</span><span class="nx">constructor</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">attributes</span><span class="p">);</span></div><div class='line' id='LC543'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC544'><br/></div><div class='line' id='LC545'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// A model is new if it has never been saved to the server, and lacks an id.</span></div><div class='line' id='LC546'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">isNew</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC547'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">id</span> <span class="o">==</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC548'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC549'><br/></div><div class='line' id='LC550'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Check if the model is currently in a valid state.</span></div><div class='line' id='LC551'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">isValid</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC552'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">_validate</span><span class="p">({},</span> <span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">options</span> <span class="o">||</span> <span class="p">{},</span> <span class="p">{</span> <span class="nx">validate</span><span class="o">:</span> <span class="kc">true</span> <span class="p">}));</span></div><div class='line' id='LC553'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC554'><br/></div><div class='line' id='LC555'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Run validation against the next complete set of model attributes,</span></div><div class='line' id='LC556'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// returning `true` if all is well. Otherwise, fire an `&quot;invalid&quot;` event.</span></div><div class='line' id='LC557'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_validate</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">attrs</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC558'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">options</span><span class="p">.</span><span class="nx">validate</span> <span class="o">||</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">validate</span><span class="p">)</span> <span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC559'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">attrs</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="k">this</span><span class="p">.</span><span class="nx">attributes</span><span class="p">,</span> <span class="nx">attrs</span><span class="p">);</span></div><div class='line' id='LC560'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">error</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">validationError</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">validate</span><span class="p">(</span><span class="nx">attrs</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="o">||</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC561'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">error</span><span class="p">)</span> <span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC562'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;invalid&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">,</span> <span class="nx">error</span><span class="p">,</span> <span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="p">{</span><span class="nx">validationError</span><span class="o">:</span> <span class="nx">error</span><span class="p">}));</span></div><div class='line' id='LC563'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC564'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC565'><br/></div><div class='line' id='LC566'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC567'><br/></div><div class='line' id='LC568'>&nbsp;&nbsp;<span class="c1">// Underscore methods that we want to implement on the Model.</span></div><div class='line' id='LC569'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">modelMethods</span> <span class="o">=</span> <span class="p">[</span><span class="s1">&#39;keys&#39;</span><span class="p">,</span> <span class="s1">&#39;values&#39;</span><span class="p">,</span> <span class="s1">&#39;pairs&#39;</span><span class="p">,</span> <span class="s1">&#39;invert&#39;</span><span class="p">,</span> <span class="s1">&#39;pick&#39;</span><span class="p">,</span> <span class="s1">&#39;omit&#39;</span><span class="p">];</span></div><div class='line' id='LC570'><br/></div><div class='line' id='LC571'>&nbsp;&nbsp;<span class="c1">// Mix in each Underscore method as a proxy to `Model#attributes`.</span></div><div class='line' id='LC572'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">modelMethods</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">method</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC573'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Model</span><span class="p">.</span><span class="nx">prototype</span><span class="p">[</span><span class="nx">method</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC574'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">args</span> <span class="o">=</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC575'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">args</span><span class="p">.</span><span class="nx">unshift</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">attributes</span><span class="p">);</span></div><div class='line' id='LC576'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">[</span><span class="nx">method</span><span class="p">].</span><span class="nx">apply</span><span class="p">(</span><span class="nx">_</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span></div><div class='line' id='LC577'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC578'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC579'><br/></div><div class='line' id='LC580'>&nbsp;&nbsp;<span class="c1">// Backbone.Collection</span></div><div class='line' id='LC581'>&nbsp;&nbsp;<span class="c1">// -------------------</span></div><div class='line' id='LC582'><br/></div><div class='line' id='LC583'>&nbsp;&nbsp;<span class="c1">// If models tend to represent a single row of data, a Backbone Collection is</span></div><div class='line' id='LC584'>&nbsp;&nbsp;<span class="c1">// more analagous to a table full of data ... or a small slice or page of that</span></div><div class='line' id='LC585'>&nbsp;&nbsp;<span class="c1">// table, or a collection of rows that belong together for a particular reason</span></div><div class='line' id='LC586'>&nbsp;&nbsp;<span class="c1">// -- all of the messages in this particular folder, all of the documents</span></div><div class='line' id='LC587'>&nbsp;&nbsp;<span class="c1">// belonging to this particular author, and so on. Collections maintain</span></div><div class='line' id='LC588'>&nbsp;&nbsp;<span class="c1">// indexes of their models, both in order, and for lookup by `id`.</span></div><div class='line' id='LC589'><br/></div><div class='line' id='LC590'>&nbsp;&nbsp;<span class="c1">// Create a new **Collection**, perhaps to contain a specific type of `model`.</span></div><div class='line' id='LC591'>&nbsp;&nbsp;<span class="c1">// If a `comparator` is specified, the Collection will maintain</span></div><div class='line' id='LC592'>&nbsp;&nbsp;<span class="c1">// its models in sort order, as they&#39;re added and removed.</span></div><div class='line' id='LC593'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">Collection</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Collection</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">models</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC594'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">||</span> <span class="p">(</span><span class="nx">options</span> <span class="o">=</span> <span class="p">{});</span></div><div class='line' id='LC595'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">model</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">model</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">model</span><span class="p">;</span></div><div class='line' id='LC596'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">comparator</span> <span class="o">!==</span> <span class="k">void</span> <span class="mi">0</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">comparator</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">comparator</span><span class="p">;</span></div><div class='line' id='LC597'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_reset</span><span class="p">();</span></div><div class='line' id='LC598'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">initialize</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC599'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">models</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">reset</span><span class="p">(</span><span class="nx">models</span><span class="p">,</span> <span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span><span class="nx">silent</span><span class="o">:</span> <span class="kc">true</span><span class="p">},</span> <span class="nx">options</span><span class="p">));</span></div><div class='line' id='LC600'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC601'><br/></div><div class='line' id='LC602'>&nbsp;&nbsp;<span class="c1">// Default options for `Collection#set`.</span></div><div class='line' id='LC603'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">setOptions</span> <span class="o">=</span> <span class="p">{</span><span class="nx">add</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span> <span class="nx">remove</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span> <span class="nx">merge</span><span class="o">:</span> <span class="kc">true</span><span class="p">};</span></div><div class='line' id='LC604'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">addOptions</span> <span class="o">=</span> <span class="p">{</span><span class="nx">add</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span> <span class="nx">remove</span><span class="o">:</span> <span class="kc">false</span><span class="p">};</span></div><div class='line' id='LC605'><br/></div><div class='line' id='LC606'>&nbsp;&nbsp;<span class="c1">// Define the Collection&#39;s inheritable methods.</span></div><div class='line' id='LC607'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">Collection</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="nx">Events</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC608'><br/></div><div class='line' id='LC609'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// The default model for a collection is just a **Backbone.Model**.</span></div><div class='line' id='LC610'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// This should be overridden in most cases.</span></div><div class='line' id='LC611'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">model</span><span class="o">:</span> <span class="nx">Model</span><span class="p">,</span></div><div class='line' id='LC612'><br/></div><div class='line' id='LC613'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Initialize is an empty function by default. Override it with your own</span></div><div class='line' id='LC614'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// initialization logic.</span></div><div class='line' id='LC615'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">initialize</span><span class="o">:</span> <span class="kd">function</span><span class="p">(){},</span></div><div class='line' id='LC616'><br/></div><div class='line' id='LC617'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// The JSON representation of a Collection is an array of the</span></div><div class='line' id='LC618'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// models&#39; attributes.</span></div><div class='line' id='LC619'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toJSON</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC620'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">model</span><span class="p">){</span> <span class="k">return</span> <span class="nx">model</span><span class="p">.</span><span class="nx">toJSON</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span> <span class="p">});</span></div><div class='line' id='LC621'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC622'><br/></div><div class='line' id='LC623'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Proxy `Backbone.sync` by default.</span></div><div class='line' id='LC624'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">sync</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC625'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">sync</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC626'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC627'><br/></div><div class='line' id='LC628'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Add a model, or list of models to the set.</span></div><div class='line' id='LC629'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">add</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">models</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC630'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="nx">models</span><span class="p">,</span> <span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span><span class="nx">merge</span><span class="o">:</span> <span class="kc">false</span><span class="p">},</span> <span class="nx">options</span><span class="p">,</span> <span class="nx">addOptions</span><span class="p">));</span></div><div class='line' id='LC631'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC632'><br/></div><div class='line' id='LC633'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Remove a model, or a list of models from the set.</span></div><div class='line' id='LC634'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">remove</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">models</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC635'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">singular</span> <span class="o">=</span> <span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">models</span><span class="p">);</span></div><div class='line' id='LC636'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">models</span> <span class="o">=</span> <span class="nx">singular</span> <span class="o">?</span> <span class="p">[</span><span class="nx">models</span><span class="p">]</span> <span class="o">:</span> <span class="nx">_</span><span class="p">.</span><span class="nx">clone</span><span class="p">(</span><span class="nx">models</span><span class="p">);</span></div><div class='line' id='LC637'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">||</span> <span class="p">(</span><span class="nx">options</span> <span class="o">=</span> <span class="p">{});</span></div><div class='line' id='LC638'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">l</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">model</span><span class="p">;</span></div><div class='line' id='LC639'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">l</span> <span class="o">=</span> <span class="nx">models</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC640'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">model</span> <span class="o">=</span> <span class="nx">models</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="nx">models</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span></div><div class='line' id='LC641'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">model</span><span class="p">)</span> <span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC642'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">delete</span> <span class="k">this</span><span class="p">.</span><span class="nx">_byId</span><span class="p">[</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">];</span></div><div class='line' id='LC643'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">delete</span> <span class="k">this</span><span class="p">.</span><span class="nx">_byId</span><span class="p">[</span><span class="nx">model</span><span class="p">.</span><span class="nx">cid</span><span class="p">];</span></div><div class='line' id='LC644'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">index</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">model</span><span class="p">);</span></div><div class='line' id='LC645'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">models</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span><span class="nx">index</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC646'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">length</span><span class="o">--</span><span class="p">;</span></div><div class='line' id='LC647'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">options</span><span class="p">.</span><span class="nx">silent</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC648'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">index</span> <span class="o">=</span> <span class="nx">index</span><span class="p">;</span></div><div class='line' id='LC649'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">model</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;remove&#39;</span><span class="p">,</span> <span class="nx">model</span><span class="p">,</span> <span class="k">this</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC650'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC651'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_removeReference</span><span class="p">(</span><span class="nx">model</span><span class="p">);</span></div><div class='line' id='LC652'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC653'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">singular</span> <span class="o">?</span> <span class="nx">models</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">:</span> <span class="nx">models</span><span class="p">;</span></div><div class='line' id='LC654'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC655'><br/></div><div class='line' id='LC656'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Update a collection by `set`-ing a new list of models, adding new ones,</span></div><div class='line' id='LC657'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// removing models that are no longer present, and merging models that</span></div><div class='line' id='LC658'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// already exist in the collection, as necessary. Similar to **Model#set**,</span></div><div class='line' id='LC659'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// the core operation for updating the data contained by the collection.</span></div><div class='line' id='LC660'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">set</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">models</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC661'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">defaults</span><span class="p">({},</span> <span class="nx">options</span><span class="p">,</span> <span class="nx">setOptions</span><span class="p">);</span></div><div class='line' id='LC662'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">parse</span><span class="p">)</span> <span class="nx">models</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">models</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC663'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">singular</span> <span class="o">=</span> <span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">models</span><span class="p">);</span></div><div class='line' id='LC664'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">models</span> <span class="o">=</span> <span class="nx">singular</span> <span class="o">?</span> <span class="p">(</span><span class="nx">models</span> <span class="o">?</span> <span class="p">[</span><span class="nx">models</span><span class="p">]</span> <span class="o">:</span> <span class="p">[])</span> <span class="o">:</span> <span class="nx">_</span><span class="p">.</span><span class="nx">clone</span><span class="p">(</span><span class="nx">models</span><span class="p">);</span></div><div class='line' id='LC665'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">l</span><span class="p">,</span> <span class="nx">id</span><span class="p">,</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">attrs</span><span class="p">,</span> <span class="nx">existing</span><span class="p">,</span> <span class="nx">sort</span><span class="p">;</span></div><div class='line' id='LC666'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">at</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">at</span><span class="p">;</span></div><div class='line' id='LC667'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">targetModel</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">model</span><span class="p">;</span></div><div class='line' id='LC668'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">sortable</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">comparator</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">at</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">sort</span> <span class="o">!==</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC669'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">sortAttr</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isString</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">comparator</span><span class="p">)</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">comparator</span> <span class="o">:</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC670'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">toAdd</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">toRemove</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">modelMap</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC671'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">add</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">add</span><span class="p">,</span> <span class="nx">merge</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">merge</span><span class="p">,</span> <span class="nx">remove</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">remove</span><span class="p">;</span></div><div class='line' id='LC672'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">order</span> <span class="o">=</span> <span class="o">!</span><span class="nx">sortable</span> <span class="o">&amp;&amp;</span> <span class="nx">add</span> <span class="o">&amp;&amp;</span> <span class="nx">remove</span> <span class="o">?</span> <span class="p">[]</span> <span class="o">:</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC673'><br/></div><div class='line' id='LC674'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Turn bare objects into model references, and prevent invalid models</span></div><div class='line' id='LC675'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// from being added.</span></div><div class='line' id='LC676'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">l</span> <span class="o">=</span> <span class="nx">models</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC677'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">attrs</span> <span class="o">=</span> <span class="nx">models</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC678'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">attrs</span> <span class="k">instanceof</span> <span class="nx">Model</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC679'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">id</span> <span class="o">=</span> <span class="nx">model</span> <span class="o">=</span> <span class="nx">attrs</span><span class="p">;</span></div><div class='line' id='LC680'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC681'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">id</span> <span class="o">=</span> <span class="nx">attrs</span><span class="p">[</span><span class="nx">targetModel</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">idAttribute</span><span class="p">];</span></div><div class='line' id='LC682'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC683'><br/></div><div class='line' id='LC684'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If a duplicate is found, prevent it from being added and</span></div><div class='line' id='LC685'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// optionally merge it into the existing model.</span></div><div class='line' id='LC686'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">existing</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="nx">id</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC687'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">remove</span><span class="p">)</span> <span class="nx">modelMap</span><span class="p">[</span><span class="nx">existing</span><span class="p">.</span><span class="nx">cid</span><span class="p">]</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC688'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">merge</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC689'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">attrs</span> <span class="o">=</span> <span class="nx">attrs</span> <span class="o">===</span> <span class="nx">model</span> <span class="o">?</span> <span class="nx">model</span><span class="p">.</span><span class="nx">attributes</span> <span class="o">:</span> <span class="nx">attrs</span><span class="p">;</span></div><div class='line' id='LC690'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">parse</span><span class="p">)</span> <span class="nx">attrs</span> <span class="o">=</span> <span class="nx">existing</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">attrs</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC691'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">existing</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="nx">attrs</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC692'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">sortable</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">sort</span> <span class="o">&amp;&amp;</span> <span class="nx">existing</span><span class="p">.</span><span class="nx">hasChanged</span><span class="p">(</span><span class="nx">sortAttr</span><span class="p">))</span> <span class="nx">sort</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC693'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC694'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">models</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">existing</span><span class="p">;</span></div><div class='line' id='LC695'><br/></div><div class='line' id='LC696'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If this is a new, valid model, push it to the `toAdd` list.</span></div><div class='line' id='LC697'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">add</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC698'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">model</span> <span class="o">=</span> <span class="nx">models</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_prepareModel</span><span class="p">(</span><span class="nx">attrs</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC699'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">model</span><span class="p">)</span> <span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC700'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toAdd</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">model</span><span class="p">);</span></div><div class='line' id='LC701'><br/></div><div class='line' id='LC702'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Listen to added models&#39; events, and index models for lookup by</span></div><div class='line' id='LC703'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// `id` and by `cid`.</span></div><div class='line' id='LC704'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">model</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;all&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">_onModelEvent</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC705'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_byId</span><span class="p">[</span><span class="nx">model</span><span class="p">.</span><span class="nx">cid</span><span class="p">]</span> <span class="o">=</span> <span class="nx">model</span><span class="p">;</span></div><div class='line' id='LC706'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">_byId</span><span class="p">[</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">]</span> <span class="o">=</span> <span class="nx">model</span><span class="p">;</span></div><div class='line' id='LC707'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC708'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">order</span><span class="p">)</span> <span class="nx">order</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">existing</span> <span class="o">||</span> <span class="nx">model</span><span class="p">);</span></div><div class='line' id='LC709'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC710'><br/></div><div class='line' id='LC711'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Remove nonexistent models if appropriate.</span></div><div class='line' id='LC712'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">remove</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC713'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">l</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC714'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">modelMap</span><span class="p">[(</span><span class="nx">model</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">models</span><span class="p">[</span><span class="nx">i</span><span class="p">]).</span><span class="nx">cid</span><span class="p">])</span> <span class="nx">toRemove</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">model</span><span class="p">);</span></div><div class='line' id='LC715'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC716'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">toRemove</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">remove</span><span class="p">(</span><span class="nx">toRemove</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC717'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC718'><br/></div><div class='line' id='LC719'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// See if sorting is needed, update `length` and splice in new models.</span></div><div class='line' id='LC720'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">toAdd</span><span class="p">.</span><span class="nx">length</span> <span class="o">||</span> <span class="p">(</span><span class="nx">order</span> <span class="o">&amp;&amp;</span> <span class="nx">order</span><span class="p">.</span><span class="nx">length</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC721'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">sortable</span><span class="p">)</span> <span class="nx">sort</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC722'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">length</span> <span class="o">+=</span> <span class="nx">toAdd</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC723'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">at</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC724'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">l</span> <span class="o">=</span> <span class="nx">toAdd</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC725'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">models</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span><span class="nx">at</span> <span class="o">+</span> <span class="nx">i</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">toAdd</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span></div><div class='line' id='LC726'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC727'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC728'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">order</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">models</span><span class="p">.</span><span class="nx">length</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC729'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">orderedModels</span> <span class="o">=</span> <span class="nx">order</span> <span class="o">||</span> <span class="nx">toAdd</span><span class="p">;</span></div><div class='line' id='LC730'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">l</span> <span class="o">=</span> <span class="nx">orderedModels</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC731'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">models</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">orderedModels</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span></div><div class='line' id='LC732'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC733'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC734'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC735'><br/></div><div class='line' id='LC736'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Silently sort the collection if appropriate.</span></div><div class='line' id='LC737'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">sort</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">sort</span><span class="p">({</span><span class="nx">silent</span><span class="o">:</span> <span class="kc">true</span><span class="p">});</span></div><div class='line' id='LC738'><br/></div><div class='line' id='LC739'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Unless silenced, it&#39;s time to fire all appropriate add/sort events.</span></div><div class='line' id='LC740'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">options</span><span class="p">.</span><span class="nx">silent</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC741'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">l</span> <span class="o">=</span> <span class="nx">toAdd</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC742'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="nx">model</span> <span class="o">=</span> <span class="nx">toAdd</span><span class="p">[</span><span class="nx">i</span><span class="p">]).</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;add&#39;</span><span class="p">,</span> <span class="nx">model</span><span class="p">,</span> <span class="k">this</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC743'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC744'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">sort</span> <span class="o">||</span> <span class="p">(</span><span class="nx">order</span> <span class="o">&amp;&amp;</span> <span class="nx">order</span><span class="p">.</span><span class="nx">length</span><span class="p">))</span> <span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;sort&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC745'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC746'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC747'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Return the added (or merged) model (or models).</span></div><div class='line' id='LC748'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">singular</span> <span class="o">?</span> <span class="nx">models</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">:</span> <span class="nx">models</span><span class="p">;</span></div><div class='line' id='LC749'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC750'><br/></div><div class='line' id='LC751'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// When you have more items than you want to add or remove individually,</span></div><div class='line' id='LC752'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// you can reset the entire set with a new list of models, without firing</span></div><div class='line' id='LC753'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// any granular `add` or `remove` events. Fires `reset` when finished.</span></div><div class='line' id='LC754'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Useful for bulk operations and optimizations.</span></div><div class='line' id='LC755'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">reset</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">models</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC756'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">||</span> <span class="p">(</span><span class="nx">options</span> <span class="o">=</span> <span class="p">{});</span></div><div class='line' id='LC757'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">l</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">models</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC758'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_removeReference</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">models</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span></div><div class='line' id='LC759'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC760'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">previousModels</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">models</span><span class="p">;</span></div><div class='line' id='LC761'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_reset</span><span class="p">();</span></div><div class='line' id='LC762'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">models</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span><span class="nx">models</span><span class="p">,</span> <span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span><span class="nx">silent</span><span class="o">:</span> <span class="kc">true</span><span class="p">},</span> <span class="nx">options</span><span class="p">));</span></div><div class='line' id='LC763'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">options</span><span class="p">.</span><span class="nx">silent</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;reset&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC764'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">models</span><span class="p">;</span></div><div class='line' id='LC765'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC766'><br/></div><div class='line' id='LC767'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Add a model to the end of the collection.</span></div><div class='line' id='LC768'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">push</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">model</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC769'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span><span class="nx">model</span><span class="p">,</span> <span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span><span class="nx">at</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">length</span><span class="p">},</span> <span class="nx">options</span><span class="p">));</span></div><div class='line' id='LC770'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC771'><br/></div><div class='line' id='LC772'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Remove a model from the end of the collection.</span></div><div class='line' id='LC773'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pop</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC774'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">model</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">at</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC775'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">remove</span><span class="p">(</span><span class="nx">model</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC776'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">model</span><span class="p">;</span></div><div class='line' id='LC777'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC778'><br/></div><div class='line' id='LC779'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Add a model to the beginning of the collection.</span></div><div class='line' id='LC780'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">unshift</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">model</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC781'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span><span class="nx">model</span><span class="p">,</span> <span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span><span class="nx">at</span><span class="o">:</span> <span class="mi">0</span><span class="p">},</span> <span class="nx">options</span><span class="p">));</span></div><div class='line' id='LC782'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC783'><br/></div><div class='line' id='LC784'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Remove a model from the beginning of the collection.</span></div><div class='line' id='LC785'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">shift</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC786'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">model</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">at</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC787'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">remove</span><span class="p">(</span><span class="nx">model</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC788'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">model</span><span class="p">;</span></div><div class='line' id='LC789'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC790'><br/></div><div class='line' id='LC791'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Slice out a sub-array of models from the collection.</span></div><div class='line' id='LC792'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">slice</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC793'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">models</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC794'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC795'><br/></div><div class='line' id='LC796'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Get a model from the set by id.</span></div><div class='line' id='LC797'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">get</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC798'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC799'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">_byId</span><span class="p">[</span><span class="nx">obj</span><span class="p">.</span><span class="nx">id</span><span class="p">]</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">_byId</span><span class="p">[</span><span class="nx">obj</span><span class="p">.</span><span class="nx">cid</span><span class="p">]</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">_byId</span><span class="p">[</span><span class="nx">obj</span><span class="p">];</span></div><div class='line' id='LC800'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC801'><br/></div><div class='line' id='LC802'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Get the model at the given index.</span></div><div class='line' id='LC803'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">at</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">index</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC804'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">models</span><span class="p">[</span><span class="nx">index</span><span class="p">];</span></div><div class='line' id='LC805'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC806'><br/></div><div class='line' id='LC807'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Return models with matching attributes. Useful for simple cases of</span></div><div class='line' id='LC808'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// `filter`.</span></div><div class='line' id='LC809'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">where</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">attrs</span><span class="p">,</span> <span class="nx">first</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC810'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isEmpty</span><span class="p">(</span><span class="nx">attrs</span><span class="p">))</span> <span class="k">return</span> <span class="nx">first</span> <span class="o">?</span> <span class="k">void</span> <span class="mi">0</span> <span class="o">:</span> <span class="p">[];</span></div><div class='line' id='LC811'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">[</span><span class="nx">first</span> <span class="o">?</span> <span class="s1">&#39;find&#39;</span> <span class="o">:</span> <span class="s1">&#39;filter&#39;</span><span class="p">](</span><span class="kd">function</span><span class="p">(</span><span class="nx">model</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC812'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">attrs</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC813'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">attrs</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">!==</span> <span class="nx">model</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="nx">key</span><span class="p">))</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC814'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC815'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC816'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC817'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC818'><br/></div><div class='line' id='LC819'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Return the first model with matching attributes. Useful for simple cases</span></div><div class='line' id='LC820'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// of `find`.</span></div><div class='line' id='LC821'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">findWhere</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">attrs</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC822'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">where</span><span class="p">(</span><span class="nx">attrs</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC823'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC824'><br/></div><div class='line' id='LC825'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Force the collection to re-sort itself. You don&#39;t need to call this under</span></div><div class='line' id='LC826'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// normal circumstances, as the set will maintain sort order as each item</span></div><div class='line' id='LC827'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// is added.</span></div><div class='line' id='LC828'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">sort</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC829'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">comparator</span><span class="p">)</span> <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Cannot sort a set without a comparator&#39;</span><span class="p">);</span></div><div class='line' id='LC830'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">||</span> <span class="p">(</span><span class="nx">options</span> <span class="o">=</span> <span class="p">{});</span></div><div class='line' id='LC831'><br/></div><div class='line' id='LC832'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Run sort based on type of `comparator`.</span></div><div class='line' id='LC833'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isString</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">comparator</span><span class="p">)</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">comparator</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC834'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">models</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">sortBy</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">comparator</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC835'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC836'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">models</span><span class="p">.</span><span class="nx">sort</span><span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">comparator</span><span class="p">,</span> <span class="k">this</span><span class="p">));</span></div><div class='line' id='LC837'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC838'><br/></div><div class='line' id='LC839'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">options</span><span class="p">.</span><span class="nx">silent</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;sort&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC840'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC841'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC842'><br/></div><div class='line' id='LC843'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Pluck an attribute from each model in the collection.</span></div><div class='line' id='LC844'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pluck</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">attr</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC845'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">invoke</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">models</span><span class="p">,</span> <span class="s1">&#39;get&#39;</span><span class="p">,</span> <span class="nx">attr</span><span class="p">);</span></div><div class='line' id='LC846'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC847'><br/></div><div class='line' id='LC848'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Fetch the default set of models for this collection, resetting the</span></div><div class='line' id='LC849'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// collection when they arrive. If `reset: true` is passed, the response</span></div><div class='line' id='LC850'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// data will be passed through the `reset` method instead of `set`.</span></div><div class='line' id='LC851'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fetch</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC852'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="nx">options</span> <span class="o">?</span> <span class="nx">_</span><span class="p">.</span><span class="nx">clone</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="o">:</span> <span class="p">{};</span></div><div class='line' id='LC853'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">parse</span> <span class="o">===</span> <span class="k">void</span> <span class="mi">0</span><span class="p">)</span> <span class="nx">options</span><span class="p">.</span><span class="nx">parse</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC854'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">success</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">success</span><span class="p">;</span></div><div class='line' id='LC855'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">collection</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC856'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">success</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">resp</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC857'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">method</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">reset</span> <span class="o">?</span> <span class="s1">&#39;reset&#39;</span> <span class="o">:</span> <span class="s1">&#39;set&#39;</span><span class="p">;</span></div><div class='line' id='LC858'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">collection</span><span class="p">[</span><span class="nx">method</span><span class="p">](</span><span class="nx">resp</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC859'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">success</span><span class="p">)</span> <span class="nx">success</span><span class="p">(</span><span class="nx">collection</span><span class="p">,</span> <span class="nx">resp</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC860'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">collection</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;sync&#39;</span><span class="p">,</span> <span class="nx">collection</span><span class="p">,</span> <span class="nx">resp</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC861'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC862'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">wrapError</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC863'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">sync</span><span class="p">(</span><span class="s1">&#39;read&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC864'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC865'><br/></div><div class='line' id='LC866'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Create a new instance of a model in this collection. Add the model to the</span></div><div class='line' id='LC867'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// collection immediately, unless `wait: true` is passed, in which case we</span></div><div class='line' id='LC868'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// wait for the server to agree.</span></div><div class='line' id='LC869'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">create</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">model</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC870'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="nx">options</span> <span class="o">?</span> <span class="nx">_</span><span class="p">.</span><span class="nx">clone</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="o">:</span> <span class="p">{};</span></div><div class='line' id='LC871'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">model</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_prepareModel</span><span class="p">(</span><span class="nx">model</span><span class="p">,</span> <span class="nx">options</span><span class="p">)))</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC872'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">options</span><span class="p">.</span><span class="nx">wait</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span><span class="nx">model</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC873'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">collection</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC874'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">success</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">success</span><span class="p">;</span></div><div class='line' id='LC875'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">success</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">model</span><span class="p">,</span> <span class="nx">resp</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC876'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">wait</span><span class="p">)</span> <span class="nx">collection</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span><span class="nx">model</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC877'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">success</span><span class="p">)</span> <span class="nx">success</span><span class="p">(</span><span class="nx">model</span><span class="p">,</span> <span class="nx">resp</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC878'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC879'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">model</span><span class="p">.</span><span class="nx">save</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC880'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">model</span><span class="p">;</span></div><div class='line' id='LC881'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC882'><br/></div><div class='line' id='LC883'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// **parse** converts a response into a list of models to be added to the</span></div><div class='line' id='LC884'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// collection. The default implementation is just to pass it through.</span></div><div class='line' id='LC885'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">parse</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">resp</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC886'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">resp</span><span class="p">;</span></div><div class='line' id='LC887'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC888'><br/></div><div class='line' id='LC889'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Create a new collection with an identical list of models as this one.</span></div><div class='line' id='LC890'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">clone</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC891'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="k">this</span><span class="p">.</span><span class="nx">constructor</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">models</span><span class="p">);</span></div><div class='line' id='LC892'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC893'><br/></div><div class='line' id='LC894'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Private method to reset all internal state. Called when the collection</span></div><div class='line' id='LC895'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// is first initialized or reset.</span></div><div class='line' id='LC896'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_reset</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC897'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">length</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC898'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">models</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC899'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_byId</span>  <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC900'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC901'><br/></div><div class='line' id='LC902'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Prepare a hash of attributes (or other model) to be added to this</span></div><div class='line' id='LC903'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// collection.</span></div><div class='line' id='LC904'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_prepareModel</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">attrs</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC905'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">attrs</span> <span class="k">instanceof</span> <span class="nx">Model</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC906'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">attrs</span><span class="p">.</span><span class="nx">collection</span><span class="p">)</span> <span class="nx">attrs</span><span class="p">.</span><span class="nx">collection</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC907'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">attrs</span><span class="p">;</span></div><div class='line' id='LC908'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC909'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="nx">options</span> <span class="o">?</span> <span class="nx">_</span><span class="p">.</span><span class="nx">clone</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="o">:</span> <span class="p">{};</span></div><div class='line' id='LC910'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">collection</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC911'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">model</span> <span class="o">=</span> <span class="k">new</span> <span class="k">this</span><span class="p">.</span><span class="nx">model</span><span class="p">(</span><span class="nx">attrs</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC912'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">model</span><span class="p">.</span><span class="nx">validationError</span><span class="p">)</span> <span class="k">return</span> <span class="nx">model</span><span class="p">;</span></div><div class='line' id='LC913'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;invalid&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">,</span> <span class="nx">model</span><span class="p">.</span><span class="nx">validationError</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC914'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC915'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC916'><br/></div><div class='line' id='LC917'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Internal method to sever a model&#39;s ties to a collection.</span></div><div class='line' id='LC918'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_removeReference</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">model</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC919'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span> <span class="o">===</span> <span class="nx">model</span><span class="p">.</span><span class="nx">collection</span><span class="p">)</span> <span class="k">delete</span> <span class="nx">model</span><span class="p">.</span><span class="nx">collection</span><span class="p">;</span></div><div class='line' id='LC920'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">model</span><span class="p">.</span><span class="nx">off</span><span class="p">(</span><span class="s1">&#39;all&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">_onModelEvent</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC921'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC922'><br/></div><div class='line' id='LC923'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Internal method called every time a model in the set fires an event.</span></div><div class='line' id='LC924'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Sets need to update their indexes when models change ids. All other</span></div><div class='line' id='LC925'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// events simply proxy through. &quot;add&quot; and &quot;remove&quot; events that originate</span></div><div class='line' id='LC926'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// in other collections are ignored.</span></div><div class='line' id='LC927'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_onModelEvent</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">collection</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC928'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">((</span><span class="nx">event</span> <span class="o">===</span> <span class="s1">&#39;add&#39;</span> <span class="o">||</span> <span class="nx">event</span> <span class="o">===</span> <span class="s1">&#39;remove&#39;</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">collection</span> <span class="o">!==</span> <span class="k">this</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC929'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">event</span> <span class="o">===</span> <span class="s1">&#39;destroy&#39;</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">remove</span><span class="p">(</span><span class="nx">model</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC930'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">model</span> <span class="o">&amp;&amp;</span> <span class="nx">event</span> <span class="o">===</span> <span class="s1">&#39;change:&#39;</span> <span class="o">+</span> <span class="nx">model</span><span class="p">.</span><span class="nx">idAttribute</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC931'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">delete</span> <span class="k">this</span><span class="p">.</span><span class="nx">_byId</span><span class="p">[</span><span class="nx">model</span><span class="p">.</span><span class="nx">previous</span><span class="p">(</span><span class="nx">model</span><span class="p">.</span><span class="nx">idAttribute</span><span class="p">)];</span></div><div class='line' id='LC932'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">_byId</span><span class="p">[</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">]</span> <span class="o">=</span> <span class="nx">model</span><span class="p">;</span></div><div class='line' id='LC933'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC934'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC935'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC936'><br/></div><div class='line' id='LC937'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC938'><br/></div><div class='line' id='LC939'>&nbsp;&nbsp;<span class="c1">// Underscore methods that we want to implement on the Collection.</span></div><div class='line' id='LC940'>&nbsp;&nbsp;<span class="c1">// 90% of the core usefulness of Backbone Collections is actually implemented</span></div><div class='line' id='LC941'>&nbsp;&nbsp;<span class="c1">// right here:</span></div><div class='line' id='LC942'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">methods</span> <span class="o">=</span> <span class="p">[</span><span class="s1">&#39;forEach&#39;</span><span class="p">,</span> <span class="s1">&#39;each&#39;</span><span class="p">,</span> <span class="s1">&#39;map&#39;</span><span class="p">,</span> <span class="s1">&#39;collect&#39;</span><span class="p">,</span> <span class="s1">&#39;reduce&#39;</span><span class="p">,</span> <span class="s1">&#39;foldl&#39;</span><span class="p">,</span></div><div class='line' id='LC943'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;inject&#39;</span><span class="p">,</span> <span class="s1">&#39;reduceRight&#39;</span><span class="p">,</span> <span class="s1">&#39;foldr&#39;</span><span class="p">,</span> <span class="s1">&#39;find&#39;</span><span class="p">,</span> <span class="s1">&#39;detect&#39;</span><span class="p">,</span> <span class="s1">&#39;filter&#39;</span><span class="p">,</span> <span class="s1">&#39;select&#39;</span><span class="p">,</span></div><div class='line' id='LC944'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;reject&#39;</span><span class="p">,</span> <span class="s1">&#39;every&#39;</span><span class="p">,</span> <span class="s1">&#39;all&#39;</span><span class="p">,</span> <span class="s1">&#39;some&#39;</span><span class="p">,</span> <span class="s1">&#39;any&#39;</span><span class="p">,</span> <span class="s1">&#39;include&#39;</span><span class="p">,</span> <span class="s1">&#39;contains&#39;</span><span class="p">,</span> <span class="s1">&#39;invoke&#39;</span><span class="p">,</span></div><div class='line' id='LC945'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;max&#39;</span><span class="p">,</span> <span class="s1">&#39;min&#39;</span><span class="p">,</span> <span class="s1">&#39;toArray&#39;</span><span class="p">,</span> <span class="s1">&#39;size&#39;</span><span class="p">,</span> <span class="s1">&#39;first&#39;</span><span class="p">,</span> <span class="s1">&#39;head&#39;</span><span class="p">,</span> <span class="s1">&#39;take&#39;</span><span class="p">,</span> <span class="s1">&#39;initial&#39;</span><span class="p">,</span> <span class="s1">&#39;rest&#39;</span><span class="p">,</span></div><div class='line' id='LC946'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;tail&#39;</span><span class="p">,</span> <span class="s1">&#39;drop&#39;</span><span class="p">,</span> <span class="s1">&#39;last&#39;</span><span class="p">,</span> <span class="s1">&#39;without&#39;</span><span class="p">,</span> <span class="s1">&#39;difference&#39;</span><span class="p">,</span> <span class="s1">&#39;indexOf&#39;</span><span class="p">,</span> <span class="s1">&#39;shuffle&#39;</span><span class="p">,</span></div><div class='line' id='LC947'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;lastIndexOf&#39;</span><span class="p">,</span> <span class="s1">&#39;isEmpty&#39;</span><span class="p">,</span> <span class="s1">&#39;chain&#39;</span><span class="p">];</span></div><div class='line' id='LC948'><br/></div><div class='line' id='LC949'>&nbsp;&nbsp;<span class="c1">// Mix in each Underscore method as a proxy to `Collection#models`.</span></div><div class='line' id='LC950'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">methods</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">method</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC951'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Collection</span><span class="p">.</span><span class="nx">prototype</span><span class="p">[</span><span class="nx">method</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC952'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">args</span> <span class="o">=</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC953'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">args</span><span class="p">.</span><span class="nx">unshift</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">models</span><span class="p">);</span></div><div class='line' id='LC954'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">[</span><span class="nx">method</span><span class="p">].</span><span class="nx">apply</span><span class="p">(</span><span class="nx">_</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span></div><div class='line' id='LC955'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC956'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC957'><br/></div><div class='line' id='LC958'>&nbsp;&nbsp;<span class="c1">// Underscore methods that take a property name as an argument.</span></div><div class='line' id='LC959'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">attributeMethods</span> <span class="o">=</span> <span class="p">[</span><span class="s1">&#39;groupBy&#39;</span><span class="p">,</span> <span class="s1">&#39;countBy&#39;</span><span class="p">,</span> <span class="s1">&#39;sortBy&#39;</span><span class="p">];</span></div><div class='line' id='LC960'><br/></div><div class='line' id='LC961'>&nbsp;&nbsp;<span class="c1">// Use attributes instead of properties.</span></div><div class='line' id='LC962'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">attributeMethods</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">method</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC963'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Collection</span><span class="p">.</span><span class="nx">prototype</span><span class="p">[</span><span class="nx">method</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC964'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">iterator</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="o">?</span> <span class="nx">value</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">model</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC965'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">model</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC966'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC967'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">[</span><span class="nx">method</span><span class="p">](</span><span class="k">this</span><span class="p">.</span><span class="nx">models</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">);</span></div><div class='line' id='LC968'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC969'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC970'><br/></div><div class='line' id='LC971'>&nbsp;&nbsp;<span class="c1">// Backbone.View</span></div><div class='line' id='LC972'>&nbsp;&nbsp;<span class="c1">// -------------</span></div><div class='line' id='LC973'><br/></div><div class='line' id='LC974'>&nbsp;&nbsp;<span class="c1">// Backbone Views are almost more convention than they are actual code. A View</span></div><div class='line' id='LC975'>&nbsp;&nbsp;<span class="c1">// is simply a JavaScript object that represents a logical chunk of UI in the</span></div><div class='line' id='LC976'>&nbsp;&nbsp;<span class="c1">// DOM. This might be a single item, an entire list, a sidebar or panel, or</span></div><div class='line' id='LC977'>&nbsp;&nbsp;<span class="c1">// even the surrounding frame which wraps your whole app. Defining a chunk of</span></div><div class='line' id='LC978'>&nbsp;&nbsp;<span class="c1">// UI as a **View** allows you to define your DOM events declaratively, without</span></div><div class='line' id='LC979'>&nbsp;&nbsp;<span class="c1">// having to worry about render order ... and makes it easy for the view to</span></div><div class='line' id='LC980'>&nbsp;&nbsp;<span class="c1">// react to specific changes in the state of your models.</span></div><div class='line' id='LC981'><br/></div><div class='line' id='LC982'>&nbsp;&nbsp;<span class="c1">// Creating a Backbone.View creates its initial element outside of the DOM,</span></div><div class='line' id='LC983'>&nbsp;&nbsp;<span class="c1">// if an existing element is not provided...</span></div><div class='line' id='LC984'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">View</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">View</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC985'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">cid</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">uniqueId</span><span class="p">(</span><span class="s1">&#39;view&#39;</span><span class="p">);</span></div><div class='line' id='LC986'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">||</span> <span class="p">(</span><span class="nx">options</span> <span class="o">=</span> <span class="p">{});</span></div><div class='line' id='LC987'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">_</span><span class="p">.</span><span class="nx">pick</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="nx">viewOptions</span><span class="p">));</span></div><div class='line' id='LC988'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_ensureElement</span><span class="p">();</span></div><div class='line' id='LC989'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">initialize</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC990'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">delegateEvents</span><span class="p">();</span></div><div class='line' id='LC991'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC992'><br/></div><div class='line' id='LC993'>&nbsp;&nbsp;<span class="c1">// Cached regex to split keys for `delegate`.</span></div><div class='line' id='LC994'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">delegateEventSplitter</span> <span class="o">=</span> <span class="sr">/^(\S+)\s*(.*)$/</span><span class="p">;</span></div><div class='line' id='LC995'><br/></div><div class='line' id='LC996'>&nbsp;&nbsp;<span class="c1">// List of view options to be merged as properties.</span></div><div class='line' id='LC997'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">viewOptions</span> <span class="o">=</span> <span class="p">[</span><span class="s1">&#39;model&#39;</span><span class="p">,</span> <span class="s1">&#39;collection&#39;</span><span class="p">,</span> <span class="s1">&#39;el&#39;</span><span class="p">,</span> <span class="s1">&#39;id&#39;</span><span class="p">,</span> <span class="s1">&#39;attributes&#39;</span><span class="p">,</span> <span class="s1">&#39;className&#39;</span><span class="p">,</span> <span class="s1">&#39;tagName&#39;</span><span class="p">,</span> <span class="s1">&#39;events&#39;</span><span class="p">];</span></div><div class='line' id='LC998'><br/></div><div class='line' id='LC999'>&nbsp;&nbsp;<span class="c1">// Set up all inheritable **Backbone.View** properties and methods.</span></div><div class='line' id='LC1000'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">View</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="nx">Events</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC1001'><br/></div><div class='line' id='LC1002'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// The default `tagName` of a View&#39;s element is `&quot;div&quot;`.</span></div><div class='line' id='LC1003'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">tagName</span><span class="o">:</span> <span class="s1">&#39;div&#39;</span><span class="p">,</span></div><div class='line' id='LC1004'><br/></div><div class='line' id='LC1005'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// jQuery delegate for element lookup, scoped to DOM elements within the</span></div><div class='line' id='LC1006'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// current view. This should be preferred to global lookups where possible.</span></div><div class='line' id='LC1007'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">selector</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1008'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="nx">selector</span><span class="p">);</span></div><div class='line' id='LC1009'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1010'><br/></div><div class='line' id='LC1011'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Initialize is an empty function by default. Override it with your own</span></div><div class='line' id='LC1012'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// initialization logic.</span></div><div class='line' id='LC1013'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">initialize</span><span class="o">:</span> <span class="kd">function</span><span class="p">(){},</span></div><div class='line' id='LC1014'><br/></div><div class='line' id='LC1015'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// **render** is the core function that your view should override, in order</span></div><div class='line' id='LC1016'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// to populate its element (`this.el`), with the appropriate HTML. The</span></div><div class='line' id='LC1017'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// convention is for **render** to always return `this`.</span></div><div class='line' id='LC1018'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">render</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1019'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1020'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1021'><br/></div><div class='line' id='LC1022'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Remove this view by taking the element out of the DOM, and removing any</span></div><div class='line' id='LC1023'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// applicable Backbone.Events listeners.</span></div><div class='line' id='LC1024'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">remove</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1025'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">remove</span><span class="p">();</span></div><div class='line' id='LC1026'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">stopListening</span><span class="p">();</span></div><div class='line' id='LC1027'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1028'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1029'><br/></div><div class='line' id='LC1030'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Change the view&#39;s element (`this.el` property), including event</span></div><div class='line' id='LC1031'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// re-delegation.</span></div><div class='line' id='LC1032'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setElement</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="nx">delegate</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1033'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">undelegateEvents</span><span class="p">();</span></div><div class='line' id='LC1034'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$el</span> <span class="o">=</span> <span class="nx">element</span> <span class="k">instanceof</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">$</span> <span class="o">?</span> <span class="nx">element</span> <span class="o">:</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">$</span><span class="p">(</span><span class="nx">element</span><span class="p">);</span></div><div class='line' id='LC1035'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">el</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC1036'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">delegate</span> <span class="o">!==</span> <span class="kc">false</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">delegateEvents</span><span class="p">();</span></div><div class='line' id='LC1037'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1038'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1039'><br/></div><div class='line' id='LC1040'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Set callbacks, where `this.events` is a hash of</span></div><div class='line' id='LC1041'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//</span></div><div class='line' id='LC1042'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// *{&quot;event selector&quot;: &quot;callback&quot;}*</span></div><div class='line' id='LC1043'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//</span></div><div class='line' id='LC1044'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//     {</span></div><div class='line' id='LC1045'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//       &#39;mousedown .title&#39;:  &#39;edit&#39;,</span></div><div class='line' id='LC1046'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//       &#39;click .button&#39;:     &#39;save&#39;,</span></div><div class='line' id='LC1047'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//       &#39;click .open&#39;:       function(e) { ... }</span></div><div class='line' id='LC1048'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//     }</span></div><div class='line' id='LC1049'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//</span></div><div class='line' id='LC1050'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// pairs. Callbacks will be bound to the view, with `this` set properly.</span></div><div class='line' id='LC1051'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Uses event delegation for efficiency.</span></div><div class='line' id='LC1052'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Omitting the selector binds the event to `this.el`.</span></div><div class='line' id='LC1053'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// This only works for delegate-able events: not `focus`, `blur`, and</span></div><div class='line' id='LC1054'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// not `change`, `submit`, and `reset` in Internet Explorer.</span></div><div class='line' id='LC1055'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">delegateEvents</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">events</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1056'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">events</span> <span class="o">||</span> <span class="p">(</span><span class="nx">events</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">result</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;events&#39;</span><span class="p">))))</span> <span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1057'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">undelegateEvents</span><span class="p">();</span></div><div class='line' id='LC1058'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">events</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1059'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">method</span> <span class="o">=</span> <span class="nx">events</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span></div><div class='line' id='LC1060'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">method</span><span class="p">))</span> <span class="nx">method</span> <span class="o">=</span> <span class="k">this</span><span class="p">[</span><span class="nx">events</span><span class="p">[</span><span class="nx">key</span><span class="p">]];</span></div><div class='line' id='LC1061'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">method</span><span class="p">)</span> <span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC1062'><br/></div><div class='line' id='LC1063'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">match</span> <span class="o">=</span> <span class="nx">key</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">delegateEventSplitter</span><span class="p">);</span></div><div class='line' id='LC1064'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">eventName</span> <span class="o">=</span> <span class="nx">match</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span> <span class="nx">selector</span> <span class="o">=</span> <span class="nx">match</span><span class="p">[</span><span class="mi">2</span><span class="p">];</span></div><div class='line' id='LC1065'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">method</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">method</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC1066'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">eventName</span> <span class="o">+=</span> <span class="s1">&#39;.delegateEvents&#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">cid</span><span class="p">;</span></div><div class='line' id='LC1067'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">selector</span> <span class="o">===</span> <span class="s1">&#39;&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1068'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="nx">eventName</span><span class="p">,</span> <span class="nx">method</span><span class="p">);</span></div><div class='line' id='LC1069'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1070'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="nx">eventName</span><span class="p">,</span> <span class="nx">selector</span><span class="p">,</span> <span class="nx">method</span><span class="p">);</span></div><div class='line' id='LC1071'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1072'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1073'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1074'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1075'><br/></div><div class='line' id='LC1076'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Clears all callbacks previously bound to the view with `delegateEvents`.</span></div><div class='line' id='LC1077'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// You usually don&#39;t need to use this, but may wish to if you have multiple</span></div><div class='line' id='LC1078'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Backbone views attached to the same DOM element.</span></div><div class='line' id='LC1079'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">undelegateEvents</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1080'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">off</span><span class="p">(</span><span class="s1">&#39;.delegateEvents&#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">cid</span><span class="p">);</span></div><div class='line' id='LC1081'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1082'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1083'><br/></div><div class='line' id='LC1084'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Ensure that the View has a DOM element to render into.</span></div><div class='line' id='LC1085'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If `this.el` is a string, pass it through `$()`, take the first</span></div><div class='line' id='LC1086'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// matching element, and re-assign it to `el`. Otherwise, create</span></div><div class='line' id='LC1087'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// an element from the `id`, `className` and `tagName` properties.</span></div><div class='line' id='LC1088'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_ensureElement</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1089'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">el</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1090'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">attrs</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="nx">_</span><span class="p">.</span><span class="nx">result</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;attributes&#39;</span><span class="p">));</span></div><div class='line' id='LC1091'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">id</span><span class="p">)</span> <span class="nx">attrs</span><span class="p">.</span><span class="nx">id</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">result</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;id&#39;</span><span class="p">);</span></div><div class='line' id='LC1092'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">className</span><span class="p">)</span> <span class="nx">attrs</span><span class="p">[</span><span class="s1">&#39;class&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">result</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;className&#39;</span><span class="p">);</span></div><div class='line' id='LC1093'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$el</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;&#39;</span> <span class="o">+</span> <span class="nx">_</span><span class="p">.</span><span class="nx">result</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;tagName&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;&gt;&#39;</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="nx">attrs</span><span class="p">);</span></div><div class='line' id='LC1094'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">setElement</span><span class="p">(</span><span class="nx">$el</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC1095'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1096'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">setElement</span><span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">result</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;el&#39;</span><span class="p">),</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC1097'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1098'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1099'><br/></div><div class='line' id='LC1100'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1101'><br/></div><div class='line' id='LC1102'>&nbsp;&nbsp;<span class="c1">// Backbone.sync</span></div><div class='line' id='LC1103'>&nbsp;&nbsp;<span class="c1">// -------------</span></div><div class='line' id='LC1104'><br/></div><div class='line' id='LC1105'>&nbsp;&nbsp;<span class="c1">// Override this function to change the manner in which Backbone persists</span></div><div class='line' id='LC1106'>&nbsp;&nbsp;<span class="c1">// models to the server. You will be passed the type of request, and the</span></div><div class='line' id='LC1107'>&nbsp;&nbsp;<span class="c1">// model in question. By default, makes a RESTful Ajax request</span></div><div class='line' id='LC1108'>&nbsp;&nbsp;<span class="c1">// to the model&#39;s `url()`. Some possible customizations could be:</span></div><div class='line' id='LC1109'>&nbsp;&nbsp;<span class="c1">//</span></div><div class='line' id='LC1110'>&nbsp;&nbsp;<span class="c1">// * Use `setTimeout` to batch rapid-fire updates into a single request.</span></div><div class='line' id='LC1111'>&nbsp;&nbsp;<span class="c1">// * Send up the models as XML instead of JSON.</span></div><div class='line' id='LC1112'>&nbsp;&nbsp;<span class="c1">// * Persist models via WebSockets instead of Ajax.</span></div><div class='line' id='LC1113'>&nbsp;&nbsp;<span class="c1">//</span></div><div class='line' id='LC1114'>&nbsp;&nbsp;<span class="c1">// Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests</span></div><div class='line' id='LC1115'>&nbsp;&nbsp;<span class="c1">// as `POST`, with a `_method` parameter containing the true HTTP method,</span></div><div class='line' id='LC1116'>&nbsp;&nbsp;<span class="c1">// as well as all requests with the body as `application/x-www-form-urlencoded`</span></div><div class='line' id='LC1117'>&nbsp;&nbsp;<span class="c1">// instead of `application/json` with the model in a param named `model`.</span></div><div class='line' id='LC1118'>&nbsp;&nbsp;<span class="c1">// Useful when interfacing with server-side languages like **PHP** that make</span></div><div class='line' id='LC1119'>&nbsp;&nbsp;<span class="c1">// it difficult to read the body of `PUT` requests.</span></div><div class='line' id='LC1120'>&nbsp;&nbsp;<span class="nx">Backbone</span><span class="p">.</span><span class="nx">sync</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">method</span><span class="p">,</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1121'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">type</span> <span class="o">=</span> <span class="nx">methodMap</span><span class="p">[</span><span class="nx">method</span><span class="p">];</span></div><div class='line' id='LC1122'><br/></div><div class='line' id='LC1123'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Default options, unless specified.</span></div><div class='line' id='LC1124'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">defaults</span><span class="p">(</span><span class="nx">options</span> <span class="o">||</span> <span class="p">(</span><span class="nx">options</span> <span class="o">=</span> <span class="p">{}),</span> <span class="p">{</span></div><div class='line' id='LC1125'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">emulateHTTP</span><span class="o">:</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">emulateHTTP</span><span class="p">,</span></div><div class='line' id='LC1126'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">emulateJSON</span><span class="o">:</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">emulateJSON</span></div><div class='line' id='LC1127'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1128'><br/></div><div class='line' id='LC1129'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Default JSON-request options.</span></div><div class='line' id='LC1130'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">params</span> <span class="o">=</span> <span class="p">{</span><span class="nx">type</span><span class="o">:</span> <span class="nx">type</span><span class="p">,</span> <span class="nx">dataType</span><span class="o">:</span> <span class="s1">&#39;json&#39;</span><span class="p">};</span></div><div class='line' id='LC1131'><br/></div><div class='line' id='LC1132'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Ensure that we have a URL.</span></div><div class='line' id='LC1133'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">options</span><span class="p">.</span><span class="nx">url</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1134'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">params</span><span class="p">.</span><span class="nx">url</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">result</span><span class="p">(</span><span class="nx">model</span><span class="p">,</span> <span class="s1">&#39;url&#39;</span><span class="p">)</span> <span class="o">||</span> <span class="nx">urlError</span><span class="p">();</span></div><div class='line' id='LC1135'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1136'><br/></div><div class='line' id='LC1137'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Ensure that we have the appropriate request data.</span></div><div class='line' id='LC1138'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">data</span> <span class="o">==</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="nx">model</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">method</span> <span class="o">===</span> <span class="s1">&#39;create&#39;</span> <span class="o">||</span> <span class="nx">method</span> <span class="o">===</span> <span class="s1">&#39;update&#39;</span> <span class="o">||</span> <span class="nx">method</span> <span class="o">===</span> <span class="s1">&#39;patch&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC1139'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">params</span><span class="p">.</span><span class="nx">contentType</span> <span class="o">=</span> <span class="s1">&#39;application/json&#39;</span><span class="p">;</span></div><div class='line' id='LC1140'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">params</span><span class="p">.</span><span class="nx">data</span> <span class="o">=</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">attrs</span> <span class="o">||</span> <span class="nx">model</span><span class="p">.</span><span class="nx">toJSON</span><span class="p">(</span><span class="nx">options</span><span class="p">));</span></div><div class='line' id='LC1141'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1142'><br/></div><div class='line' id='LC1143'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// For older servers, emulate JSON by encoding the request into an HTML-form.</span></div><div class='line' id='LC1144'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">emulateJSON</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1145'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">params</span><span class="p">.</span><span class="nx">contentType</span> <span class="o">=</span> <span class="s1">&#39;application/x-www-form-urlencoded&#39;</span><span class="p">;</span></div><div class='line' id='LC1146'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">params</span><span class="p">.</span><span class="nx">data</span> <span class="o">=</span> <span class="nx">params</span><span class="p">.</span><span class="nx">data</span> <span class="o">?</span> <span class="p">{</span><span class="nx">model</span><span class="o">:</span> <span class="nx">params</span><span class="p">.</span><span class="nx">data</span><span class="p">}</span> <span class="o">:</span> <span class="p">{};</span></div><div class='line' id='LC1147'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1148'><br/></div><div class='line' id='LC1149'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// For older servers, emulate HTTP by mimicking the HTTP method with `_method`</span></div><div class='line' id='LC1150'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// And an `X-HTTP-Method-Override` header.</span></div><div class='line' id='LC1151'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">emulateHTTP</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">type</span> <span class="o">===</span> <span class="s1">&#39;PUT&#39;</span> <span class="o">||</span> <span class="nx">type</span> <span class="o">===</span> <span class="s1">&#39;DELETE&#39;</span> <span class="o">||</span> <span class="nx">type</span> <span class="o">===</span> <span class="s1">&#39;PATCH&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC1152'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">params</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="s1">&#39;POST&#39;</span><span class="p">;</span></div><div class='line' id='LC1153'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">emulateJSON</span><span class="p">)</span> <span class="nx">params</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">_method</span> <span class="o">=</span> <span class="nx">type</span><span class="p">;</span></div><div class='line' id='LC1154'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">beforeSend</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">beforeSend</span><span class="p">;</span></div><div class='line' id='LC1155'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">beforeSend</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">xhr</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1156'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">xhr</span><span class="p">.</span><span class="nx">setRequestHeader</span><span class="p">(</span><span class="s1">&#39;X-HTTP-Method-Override&#39;</span><span class="p">,</span> <span class="nx">type</span><span class="p">);</span></div><div class='line' id='LC1157'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">beforeSend</span><span class="p">)</span> <span class="k">return</span> <span class="nx">beforeSend</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC1158'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1159'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1160'><br/></div><div class='line' id='LC1161'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Don&#39;t process data on a non-GET request.</span></div><div class='line' id='LC1162'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">params</span><span class="p">.</span><span class="nx">type</span> <span class="o">!==</span> <span class="s1">&#39;GET&#39;</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">options</span><span class="p">.</span><span class="nx">emulateJSON</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1163'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">params</span><span class="p">.</span><span class="nx">processData</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1164'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1165'><br/></div><div class='line' id='LC1166'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If we&#39;re sending a `PATCH` request, and we&#39;re in an old Internet Explorer</span></div><div class='line' id='LC1167'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// that still has ActiveX enabled by default, override jQuery to use that</span></div><div class='line' id='LC1168'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// for XHR instead. Remove this line when jQuery supports `PATCH` on IE8.</span></div><div class='line' id='LC1169'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">params</span><span class="p">.</span><span class="nx">type</span> <span class="o">===</span> <span class="s1">&#39;PATCH&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">noXhrPatch</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1170'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">params</span><span class="p">.</span><span class="nx">xhr</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1171'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="nx">ActiveXObject</span><span class="p">(</span><span class="s2">&quot;Microsoft.XMLHTTP&quot;</span><span class="p">);</span></div><div class='line' id='LC1172'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1173'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1174'><br/></div><div class='line' id='LC1175'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Make the request, allowing the user to override any Ajax options.</span></div><div class='line' id='LC1176'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">xhr</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">xhr</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">ajax</span><span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">params</span><span class="p">,</span> <span class="nx">options</span><span class="p">));</span></div><div class='line' id='LC1177'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">model</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;request&#39;</span><span class="p">,</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">xhr</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC1178'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">xhr</span><span class="p">;</span></div><div class='line' id='LC1179'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1180'><br/></div><div class='line' id='LC1181'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">noXhrPatch</span> <span class="o">=</span> <span class="k">typeof</span> <span class="nb">window</span> <span class="o">!==</span> <span class="s1">&#39;undefined&#39;</span> <span class="o">&amp;&amp;</span> <span class="o">!!</span><span class="nb">window</span><span class="p">.</span><span class="nx">ActiveXObject</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">XMLHttpRequest</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="k">new</span> <span class="nx">XMLHttpRequest</span><span class="p">).</span><span class="nx">dispatchEvent</span><span class="p">);</span></div><div class='line' id='LC1182'><br/></div><div class='line' id='LC1183'>&nbsp;&nbsp;<span class="c1">// Map from CRUD to HTTP for our default `Backbone.sync` implementation.</span></div><div class='line' id='LC1184'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">methodMap</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC1185'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;create&#39;</span><span class="o">:</span> <span class="s1">&#39;POST&#39;</span><span class="p">,</span></div><div class='line' id='LC1186'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;update&#39;</span><span class="o">:</span> <span class="s1">&#39;PUT&#39;</span><span class="p">,</span></div><div class='line' id='LC1187'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;patch&#39;</span><span class="o">:</span>  <span class="s1">&#39;PATCH&#39;</span><span class="p">,</span></div><div class='line' id='LC1188'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;delete&#39;</span><span class="o">:</span> <span class="s1">&#39;DELETE&#39;</span><span class="p">,</span></div><div class='line' id='LC1189'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;read&#39;</span><span class="o">:</span>   <span class="s1">&#39;GET&#39;</span></div><div class='line' id='LC1190'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1191'><br/></div><div class='line' id='LC1192'>&nbsp;&nbsp;<span class="c1">// Set the default implementation of `Backbone.ajax` to proxy through to `$`.</span></div><div class='line' id='LC1193'>&nbsp;&nbsp;<span class="c1">// Override this if you&#39;d like to use a different library.</span></div><div class='line' id='LC1194'>&nbsp;&nbsp;<span class="nx">Backbone</span><span class="p">.</span><span class="nx">ajax</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1195'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">$</span><span class="p">.</span><span class="nx">ajax</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">Backbone</span><span class="p">.</span><span class="nx">$</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC1196'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1197'><br/></div><div class='line' id='LC1198'>&nbsp;&nbsp;<span class="c1">// Backbone.Router</span></div><div class='line' id='LC1199'>&nbsp;&nbsp;<span class="c1">// ---------------</span></div><div class='line' id='LC1200'><br/></div><div class='line' id='LC1201'>&nbsp;&nbsp;<span class="c1">// Routers map faux-URLs to actions, and fire events when routes are</span></div><div class='line' id='LC1202'>&nbsp;&nbsp;<span class="c1">// matched. Creating a new one sets its `routes` hash, if not set statically.</span></div><div class='line' id='LC1203'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">Router</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Router</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1204'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">||</span> <span class="p">(</span><span class="nx">options</span> <span class="o">=</span> <span class="p">{});</span></div><div class='line' id='LC1205'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">routes</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">routes</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">routes</span><span class="p">;</span></div><div class='line' id='LC1206'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_bindRoutes</span><span class="p">();</span></div><div class='line' id='LC1207'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">initialize</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC1208'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1209'><br/></div><div class='line' id='LC1210'>&nbsp;&nbsp;<span class="c1">// Cached regular expressions for matching named param parts and splatted</span></div><div class='line' id='LC1211'>&nbsp;&nbsp;<span class="c1">// parts of route strings.</span></div><div class='line' id='LC1212'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">optionalParam</span> <span class="o">=</span> <span class="sr">/\((.*?)\)/g</span><span class="p">;</span></div><div class='line' id='LC1213'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">namedParam</span>    <span class="o">=</span> <span class="sr">/(\(\?)?:\w+/g</span><span class="p">;</span></div><div class='line' id='LC1214'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">splatParam</span>    <span class="o">=</span> <span class="sr">/\*\w+/g</span><span class="p">;</span></div><div class='line' id='LC1215'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">escapeRegExp</span>  <span class="o">=</span> <span class="sr">/[\-{}\[\]+?.,\\\^$|#\s]/g</span><span class="p">;</span></div><div class='line' id='LC1216'><br/></div><div class='line' id='LC1217'>&nbsp;&nbsp;<span class="c1">// Set up all inheritable **Backbone.Router** properties and methods.</span></div><div class='line' id='LC1218'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">Router</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="nx">Events</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC1219'><br/></div><div class='line' id='LC1220'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Initialize is an empty function by default. Override it with your own</span></div><div class='line' id='LC1221'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// initialization logic.</span></div><div class='line' id='LC1222'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">initialize</span><span class="o">:</span> <span class="kd">function</span><span class="p">(){},</span></div><div class='line' id='LC1223'><br/></div><div class='line' id='LC1224'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Manually bind a single named route to a callback. For example:</span></div><div class='line' id='LC1225'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//</span></div><div class='line' id='LC1226'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//     this.route(&#39;search/:query/p:num&#39;, &#39;search&#39;, function(query, num) {</span></div><div class='line' id='LC1227'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//       ...</span></div><div class='line' id='LC1228'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//     });</span></div><div class='line' id='LC1229'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//</span></div><div class='line' id='LC1230'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">route</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">route</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1231'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">isRegExp</span><span class="p">(</span><span class="nx">route</span><span class="p">))</span> <span class="nx">route</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_routeToRegExp</span><span class="p">(</span><span class="nx">route</span><span class="p">);</span></div><div class='line' id='LC1232'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">name</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC1233'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">callback</span> <span class="o">=</span> <span class="nx">name</span><span class="p">;</span></div><div class='line' id='LC1234'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">name</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC1235'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1236'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">callback</span><span class="p">)</span> <span class="nx">callback</span> <span class="o">=</span> <span class="k">this</span><span class="p">[</span><span class="nx">name</span><span class="p">];</span></div><div class='line' id='LC1237'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">router</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1238'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Backbone</span><span class="p">.</span><span class="nx">history</span><span class="p">.</span><span class="nx">route</span><span class="p">(</span><span class="nx">route</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">fragment</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1239'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">args</span> <span class="o">=</span> <span class="nx">router</span><span class="p">.</span><span class="nx">_extractParameters</span><span class="p">(</span><span class="nx">route</span><span class="p">,</span> <span class="nx">fragment</span><span class="p">);</span></div><div class='line' id='LC1240'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">callback</span> <span class="o">&amp;&amp;</span> <span class="nx">callback</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">router</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span></div><div class='line' id='LC1241'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">router</span><span class="p">.</span><span class="nx">trigger</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">router</span><span class="p">,</span> <span class="p">[</span><span class="s1">&#39;route:&#39;</span> <span class="o">+</span> <span class="nx">name</span><span class="p">].</span><span class="nx">concat</span><span class="p">(</span><span class="nx">args</span><span class="p">));</span></div><div class='line' id='LC1242'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">router</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;route&#39;</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span></div><div class='line' id='LC1243'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Backbone</span><span class="p">.</span><span class="nx">history</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;route&#39;</span><span class="p">,</span> <span class="nx">router</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span></div><div class='line' id='LC1244'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1245'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1246'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1247'><br/></div><div class='line' id='LC1248'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Simple proxy to `Backbone.history` to save a fragment into the history.</span></div><div class='line' id='LC1249'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">navigate</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">fragment</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1250'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Backbone</span><span class="p">.</span><span class="nx">history</span><span class="p">.</span><span class="nx">navigate</span><span class="p">(</span><span class="nx">fragment</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC1251'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1252'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1253'><br/></div><div class='line' id='LC1254'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Bind all defined routes to `Backbone.history`. We have to reverse the</span></div><div class='line' id='LC1255'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// order of the routes here to support behavior where the most general</span></div><div class='line' id='LC1256'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// routes can be defined at the bottom of the route map.</span></div><div class='line' id='LC1257'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_bindRoutes</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1258'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">routes</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC1259'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">routes</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">result</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;routes&#39;</span><span class="p">);</span></div><div class='line' id='LC1260'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">route</span><span class="p">,</span> <span class="nx">routes</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">keys</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">routes</span><span class="p">);</span></div><div class='line' id='LC1261'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span> <span class="p">((</span><span class="nx">route</span> <span class="o">=</span> <span class="nx">routes</span><span class="p">.</span><span class="nx">pop</span><span class="p">())</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1262'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">route</span><span class="p">(</span><span class="nx">route</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">routes</span><span class="p">[</span><span class="nx">route</span><span class="p">]);</span></div><div class='line' id='LC1263'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1264'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1265'><br/></div><div class='line' id='LC1266'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Convert a route string into a regular expression, suitable for matching</span></div><div class='line' id='LC1267'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// against the current location hash.</span></div><div class='line' id='LC1268'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_routeToRegExp</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">route</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1269'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">route</span> <span class="o">=</span> <span class="nx">route</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">escapeRegExp</span><span class="p">,</span> <span class="s1">&#39;\\$&amp;&#39;</span><span class="p">)</span></div><div class='line' id='LC1270'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">optionalParam</span><span class="p">,</span> <span class="s1">&#39;(?:$1)?&#39;</span><span class="p">)</span></div><div class='line' id='LC1271'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">namedParam</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">match</span><span class="p">,</span> <span class="nx">optional</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1272'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">optional</span> <span class="o">?</span> <span class="nx">match</span> <span class="o">:</span> <span class="s1">&#39;([^\/]+)&#39;</span><span class="p">;</span></div><div class='line' id='LC1273'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC1274'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">splatParam</span><span class="p">,</span> <span class="s1">&#39;(.*?)&#39;</span><span class="p">);</span></div><div class='line' id='LC1275'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s1">&#39;^&#39;</span> <span class="o">+</span> <span class="nx">route</span> <span class="o">+</span> <span class="s1">&#39;$&#39;</span><span class="p">);</span></div><div class='line' id='LC1276'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1277'><br/></div><div class='line' id='LC1278'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Given a route, and a URL fragment that it matches, return the array of</span></div><div class='line' id='LC1279'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// extracted decoded parameters. Empty or unmatched parameters will be</span></div><div class='line' id='LC1280'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// treated as `null` to normalize cross-browser behavior.</span></div><div class='line' id='LC1281'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_extractParameters</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">route</span><span class="p">,</span> <span class="nx">fragment</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1282'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">params</span> <span class="o">=</span> <span class="nx">route</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">fragment</span><span class="p">).</span><span class="nx">slice</span><span class="p">(</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC1283'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">params</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">param</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1284'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">param</span> <span class="o">?</span> <span class="nb">decodeURIComponent</span><span class="p">(</span><span class="nx">param</span><span class="p">)</span> <span class="o">:</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC1285'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1286'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1287'><br/></div><div class='line' id='LC1288'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1289'><br/></div><div class='line' id='LC1290'>&nbsp;&nbsp;<span class="c1">// Backbone.History</span></div><div class='line' id='LC1291'>&nbsp;&nbsp;<span class="c1">// ----------------</span></div><div class='line' id='LC1292'><br/></div><div class='line' id='LC1293'>&nbsp;&nbsp;<span class="c1">// Handles cross-browser history management, based on either</span></div><div class='line' id='LC1294'>&nbsp;&nbsp;<span class="c1">// [pushState](http://diveintohtml5.info/history.html) and real URLs, or</span></div><div class='line' id='LC1295'>&nbsp;&nbsp;<span class="c1">// [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)</span></div><div class='line' id='LC1296'>&nbsp;&nbsp;<span class="c1">// and URL fragments. If the browser supports neither (old IE, natch),</span></div><div class='line' id='LC1297'>&nbsp;&nbsp;<span class="c1">// falls back to polling.</span></div><div class='line' id='LC1298'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">History</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">History</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1299'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">handlers</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC1300'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">bindAll</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;checkUrl&#39;</span><span class="p">);</span></div><div class='line' id='LC1301'><br/></div><div class='line' id='LC1302'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Ensure that `History` can be used outside of the browser.</span></div><div class='line' id='LC1303'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nb">window</span> <span class="o">!==</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1304'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">location</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">location</span><span class="p">;</span></div><div class='line' id='LC1305'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">history</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">history</span><span class="p">;</span></div><div class='line' id='LC1306'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1307'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1308'><br/></div><div class='line' id='LC1309'>&nbsp;&nbsp;<span class="c1">// Cached regex for stripping a leading hash/slash and trailing space.</span></div><div class='line' id='LC1310'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">routeStripper</span> <span class="o">=</span> <span class="sr">/^[#\/]|\s+$/g</span><span class="p">;</span></div><div class='line' id='LC1311'><br/></div><div class='line' id='LC1312'>&nbsp;&nbsp;<span class="c1">// Cached regex for stripping leading and trailing slashes.</span></div><div class='line' id='LC1313'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">rootStripper</span> <span class="o">=</span> <span class="sr">/^\/+|\/+$/g</span><span class="p">;</span></div><div class='line' id='LC1314'><br/></div><div class='line' id='LC1315'>&nbsp;&nbsp;<span class="c1">// Cached regex for detecting MSIE.</span></div><div class='line' id='LC1316'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">isExplorer</span> <span class="o">=</span> <span class="sr">/msie [\w.]+/</span><span class="p">;</span></div><div class='line' id='LC1317'><br/></div><div class='line' id='LC1318'>&nbsp;&nbsp;<span class="c1">// Cached regex for removing a trailing slash.</span></div><div class='line' id='LC1319'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">trailingSlash</span> <span class="o">=</span> <span class="sr">/\/$/</span><span class="p">;</span></div><div class='line' id='LC1320'><br/></div><div class='line' id='LC1321'>&nbsp;&nbsp;<span class="c1">// Cached regex for stripping urls of hash and query.</span></div><div class='line' id='LC1322'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">pathStripper</span> <span class="o">=</span> <span class="sr">/[?#].*$/</span><span class="p">;</span></div><div class='line' id='LC1323'><br/></div><div class='line' id='LC1324'>&nbsp;&nbsp;<span class="c1">// Has the history handling already been started?</span></div><div class='line' id='LC1325'>&nbsp;&nbsp;<span class="nx">History</span><span class="p">.</span><span class="nx">started</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1326'><br/></div><div class='line' id='LC1327'>&nbsp;&nbsp;<span class="c1">// Set up all inheritable **Backbone.History** properties and methods.</span></div><div class='line' id='LC1328'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">History</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="nx">Events</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC1329'><br/></div><div class='line' id='LC1330'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// The default interval to poll for hash changes, if necessary, is</span></div><div class='line' id='LC1331'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// twenty times a second.</span></div><div class='line' id='LC1332'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">interval</span><span class="o">:</span> <span class="mi">50</span><span class="p">,</span></div><div class='line' id='LC1333'><br/></div><div class='line' id='LC1334'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Gets the true hash value. Cannot use location.hash directly due to bug</span></div><div class='line' id='LC1335'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// in Firefox where location.hash will always be decoded.</span></div><div class='line' id='LC1336'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">getHash</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nb">window</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1337'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">match</span> <span class="o">=</span> <span class="p">(</span><span class="nb">window</span> <span class="o">||</span> <span class="k">this</span><span class="p">).</span><span class="nx">location</span><span class="p">.</span><span class="nx">href</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/#(.*)$/</span><span class="p">);</span></div><div class='line' id='LC1338'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">match</span> <span class="o">?</span> <span class="nx">match</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC1339'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1340'><br/></div><div class='line' id='LC1341'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Get the cross-browser normalized URL fragment, either from the URL,</span></div><div class='line' id='LC1342'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// the hash, or the override.</span></div><div class='line' id='LC1343'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">getFragment</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">fragment</span><span class="p">,</span> <span class="nx">forcePushState</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1344'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">fragment</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1345'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_hasPushState</span> <span class="o">||</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">_wantsHashChange</span> <span class="o">||</span> <span class="nx">forcePushState</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1346'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fragment</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">pathname</span><span class="p">;</span></div><div class='line' id='LC1347'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">root</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">root</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">trailingSlash</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC1348'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">fragment</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">root</span><span class="p">))</span> <span class="nx">fragment</span> <span class="o">=</span> <span class="nx">fragment</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="nx">root</span><span class="p">.</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC1349'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1350'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fragment</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getHash</span><span class="p">();</span></div><div class='line' id='LC1351'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1352'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1353'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">fragment</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">routeStripper</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC1354'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1355'><br/></div><div class='line' id='LC1356'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Start the hash change handling, returning `true` if the current URL matches</span></div><div class='line' id='LC1357'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// an existing route, and `false` otherwise.</span></div><div class='line' id='LC1358'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">start</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1359'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">History</span><span class="p">.</span><span class="nx">started</span><span class="p">)</span> <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;Backbone.history has already been started&quot;</span><span class="p">);</span></div><div class='line' id='LC1360'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">History</span><span class="p">.</span><span class="nx">started</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1361'><br/></div><div class='line' id='LC1362'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Figure out the initial configuration. Do we need an iframe?</span></div><div class='line' id='LC1363'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Is pushState desired ... is it available?</span></div><div class='line' id='LC1364'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">options</span>          <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span><span class="nx">root</span><span class="o">:</span> <span class="s1">&#39;/&#39;</span><span class="p">},</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC1365'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">root</span>             <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">root</span><span class="p">;</span></div><div class='line' id='LC1366'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_wantsHashChange</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">hashChange</span> <span class="o">!==</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1367'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_wantsPushState</span>  <span class="o">=</span> <span class="o">!!</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">pushState</span><span class="p">;</span></div><div class='line' id='LC1368'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_hasPushState</span>    <span class="o">=</span> <span class="o">!!</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">pushState</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">history</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">history</span><span class="p">.</span><span class="nx">pushState</span><span class="p">);</span></div><div class='line' id='LC1369'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">fragment</span>          <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getFragment</span><span class="p">();</span></div><div class='line' id='LC1370'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">docMode</span>           <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">documentMode</span><span class="p">;</span></div><div class='line' id='LC1371'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">oldIE</span>             <span class="o">=</span> <span class="p">(</span><span class="nx">isExplorer</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">navigator</span><span class="p">.</span><span class="nx">userAgent</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">())</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="o">!</span><span class="nx">docMode</span> <span class="o">||</span> <span class="nx">docMode</span> <span class="o">&lt;=</span> <span class="mi">7</span><span class="p">));</span></div><div class='line' id='LC1372'><br/></div><div class='line' id='LC1373'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Normalize root to always include a leading and trailing slash.</span></div><div class='line' id='LC1374'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">root</span> <span class="o">=</span> <span class="p">(</span><span class="s1">&#39;/&#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">root</span> <span class="o">+</span> <span class="s1">&#39;/&#39;</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="nx">rootStripper</span><span class="p">,</span> <span class="s1">&#39;/&#39;</span><span class="p">);</span></div><div class='line' id='LC1375'><br/></div><div class='line' id='LC1376'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">oldIE</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">_wantsHashChange</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1377'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">iframe</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;iframe src=&quot;javascript:0&quot; tabindex=&quot;-1&quot; /&gt;&#39;</span><span class="p">).</span><span class="nx">hide</span><span class="p">().</span><span class="nx">appendTo</span><span class="p">(</span><span class="s1">&#39;body&#39;</span><span class="p">)[</span><span class="mi">0</span><span class="p">].</span><span class="nx">contentWindow</span><span class="p">;</span></div><div class='line' id='LC1378'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">navigate</span><span class="p">(</span><span class="nx">fragment</span><span class="p">);</span></div><div class='line' id='LC1379'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1380'><br/></div><div class='line' id='LC1381'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Depending on whether we&#39;re using pushState or hashes, and whether</span></div><div class='line' id='LC1382'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// &#39;onhashchange&#39; is supported, determine how we check the URL state.</span></div><div class='line' id='LC1383'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_hasPushState</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1384'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Backbone</span><span class="p">.</span><span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;popstate&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">checkUrl</span><span class="p">);</span></div><div class='line' id='LC1385'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_wantsHashChange</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="s1">&#39;onhashchange&#39;</span> <span class="k">in</span> <span class="nb">window</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">oldIE</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1386'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Backbone</span><span class="p">.</span><span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;hashchange&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">checkUrl</span><span class="p">);</span></div><div class='line' id='LC1387'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_wantsHashChange</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1388'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_checkUrlInterval</span> <span class="o">=</span> <span class="nx">setInterval</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">checkUrl</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">interval</span><span class="p">);</span></div><div class='line' id='LC1389'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1390'><br/></div><div class='line' id='LC1391'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Determine if we need to change the base url, for a pushState link</span></div><div class='line' id='LC1392'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// opened by a non-pushState browser.</span></div><div class='line' id='LC1393'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">fragment</span> <span class="o">=</span> <span class="nx">fragment</span><span class="p">;</span></div><div class='line' id='LC1394'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">loc</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">location</span><span class="p">;</span></div><div class='line' id='LC1395'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">atRoot</span> <span class="o">=</span> <span class="nx">loc</span><span class="p">.</span><span class="nx">pathname</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/[^\/]$/</span><span class="p">,</span> <span class="s1">&#39;$&amp;/&#39;</span><span class="p">)</span> <span class="o">===</span> <span class="k">this</span><span class="p">.</span><span class="nx">root</span><span class="p">;</span></div><div class='line' id='LC1396'><br/></div><div class='line' id='LC1397'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Transition from hashChange to pushState or vice versa if both are</span></div><div class='line' id='LC1398'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// requested.</span></div><div class='line' id='LC1399'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_wantsHashChange</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">_wantsPushState</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1400'><br/></div><div class='line' id='LC1401'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If we&#39;ve started off with a route from a `pushState`-enabled</span></div><div class='line' id='LC1402'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// browser, but we&#39;re currently in a browser that doesn&#39;t support it...</span></div><div class='line' id='LC1403'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">_hasPushState</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">atRoot</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1404'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">fragment</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getFragment</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC1405'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">root</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">search</span> <span class="o">+</span> <span class="s1">&#39;#&#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">fragment</span><span class="p">);</span></div><div class='line' id='LC1406'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Return immediately as browser will do redirect to new url</span></div><div class='line' id='LC1407'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1408'><br/></div><div class='line' id='LC1409'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Or if we&#39;ve started out with a hash-based route, but we&#39;re currently</span></div><div class='line' id='LC1410'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// in a browser where it could be `pushState`-based instead...</span></div><div class='line' id='LC1411'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_hasPushState</span> <span class="o">&amp;&amp;</span> <span class="nx">atRoot</span> <span class="o">&amp;&amp;</span> <span class="nx">loc</span><span class="p">.</span><span class="nx">hash</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1412'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">fragment</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getHash</span><span class="p">().</span><span class="nx">replace</span><span class="p">(</span><span class="nx">routeStripper</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC1413'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">history</span><span class="p">.</span><span class="nx">replaceState</span><span class="p">({},</span> <span class="nb">document</span><span class="p">.</span><span class="nx">title</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">root</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">fragment</span> <span class="o">+</span> <span class="nx">loc</span><span class="p">.</span><span class="nx">search</span><span class="p">);</span></div><div class='line' id='LC1414'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1415'><br/></div><div class='line' id='LC1416'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1417'><br/></div><div class='line' id='LC1418'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">silent</span><span class="p">)</span> <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">loadUrl</span><span class="p">();</span></div><div class='line' id='LC1419'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1420'><br/></div><div class='line' id='LC1421'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Disable Backbone.history, perhaps temporarily. Not useful in a real app,</span></div><div class='line' id='LC1422'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// but possibly useful for unit testing Routers.</span></div><div class='line' id='LC1423'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">stop</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1424'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Backbone</span><span class="p">.</span><span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nx">off</span><span class="p">(</span><span class="s1">&#39;popstate&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">checkUrl</span><span class="p">).</span><span class="nx">off</span><span class="p">(</span><span class="s1">&#39;hashchange&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">checkUrl</span><span class="p">);</span></div><div class='line' id='LC1425'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">clearInterval</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_checkUrlInterval</span><span class="p">);</span></div><div class='line' id='LC1426'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">History</span><span class="p">.</span><span class="nx">started</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1427'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1428'><br/></div><div class='line' id='LC1429'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Add a route to be tested when the fragment changes. Routes added later</span></div><div class='line' id='LC1430'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// may override previous routes.</span></div><div class='line' id='LC1431'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">route</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">route</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1432'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">handlers</span><span class="p">.</span><span class="nx">unshift</span><span class="p">({</span><span class="nx">route</span><span class="o">:</span> <span class="nx">route</span><span class="p">,</span> <span class="nx">callback</span><span class="o">:</span> <span class="nx">callback</span><span class="p">});</span></div><div class='line' id='LC1433'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1434'><br/></div><div class='line' id='LC1435'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Checks the current URL to see if it has changed, and if it has,</span></div><div class='line' id='LC1436'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// calls `loadUrl`, normalizing across the hidden iframe.</span></div><div class='line' id='LC1437'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">checkUrl</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1438'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">current</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getFragment</span><span class="p">();</span></div><div class='line' id='LC1439'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">current</span> <span class="o">===</span> <span class="k">this</span><span class="p">.</span><span class="nx">fragment</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">iframe</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1440'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">current</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getFragment</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">getHash</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">iframe</span><span class="p">));</span></div><div class='line' id='LC1441'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1442'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">current</span> <span class="o">===</span> <span class="k">this</span><span class="p">.</span><span class="nx">fragment</span><span class="p">)</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1443'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">iframe</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">navigate</span><span class="p">(</span><span class="nx">current</span><span class="p">);</span></div><div class='line' id='LC1444'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">loadUrl</span><span class="p">();</span></div><div class='line' id='LC1445'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1446'><br/></div><div class='line' id='LC1447'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Attempt to load the current URL fragment. If a route succeeds with a</span></div><div class='line' id='LC1448'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// match, returns `true`. If no defined routes matches the fragment,</span></div><div class='line' id='LC1449'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// returns `false`.</span></div><div class='line' id='LC1450'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">loadUrl</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">fragment</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1451'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fragment</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">fragment</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getFragment</span><span class="p">(</span><span class="nx">fragment</span><span class="p">);</span></div><div class='line' id='LC1452'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">any</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">handlers</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">handler</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1453'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">handler</span><span class="p">.</span><span class="nx">route</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">fragment</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC1454'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">handler</span><span class="p">.</span><span class="nx">callback</span><span class="p">(</span><span class="nx">fragment</span><span class="p">);</span></div><div class='line' id='LC1455'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1456'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1457'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1458'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1459'><br/></div><div class='line' id='LC1460'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Save a fragment into the hash history, or replace the URL state if the</span></div><div class='line' id='LC1461'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// &#39;replace&#39; option is passed. You are responsible for properly URL-encoding</span></div><div class='line' id='LC1462'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// the fragment in advance.</span></div><div class='line' id='LC1463'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//</span></div><div class='line' id='LC1464'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// The options object can contain `trigger: true` if you wish to have the</span></div><div class='line' id='LC1465'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// route callback be fired (not usually desirable), or `replace: true`, if</span></div><div class='line' id='LC1466'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// you wish to modify the current URL without adding an entry to the history.</span></div><div class='line' id='LC1467'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">navigate</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">fragment</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1468'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">History</span><span class="p">.</span><span class="nx">started</span><span class="p">)</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1469'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">options</span> <span class="o">||</span> <span class="nx">options</span> <span class="o">===</span> <span class="kc">true</span><span class="p">)</span> <span class="nx">options</span> <span class="o">=</span> <span class="p">{</span><span class="nx">trigger</span><span class="o">:</span> <span class="o">!!</span><span class="nx">options</span><span class="p">};</span></div><div class='line' id='LC1470'><br/></div><div class='line' id='LC1471'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">url</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">root</span> <span class="o">+</span> <span class="p">(</span><span class="nx">fragment</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getFragment</span><span class="p">(</span><span class="nx">fragment</span> <span class="o">||</span> <span class="s1">&#39;&#39;</span><span class="p">));</span></div><div class='line' id='LC1472'><br/></div><div class='line' id='LC1473'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Strip the fragment of the query and hash for matching.</span></div><div class='line' id='LC1474'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fragment</span> <span class="o">=</span> <span class="nx">fragment</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">pathStripper</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC1475'><br/></div><div class='line' id='LC1476'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">fragment</span> <span class="o">===</span> <span class="nx">fragment</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC1477'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">fragment</span> <span class="o">=</span> <span class="nx">fragment</span><span class="p">;</span></div><div class='line' id='LC1478'><br/></div><div class='line' id='LC1479'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Don&#39;t include a trailing slash on the root.</span></div><div class='line' id='LC1480'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">fragment</span> <span class="o">===</span> <span class="s1">&#39;&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">url</span> <span class="o">!==</span> <span class="s1">&#39;/&#39;</span><span class="p">)</span> <span class="nx">url</span> <span class="o">=</span> <span class="nx">url</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC1481'><br/></div><div class='line' id='LC1482'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If pushState is available, we use it to set the fragment as a real URL.</span></div><div class='line' id='LC1483'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_hasPushState</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1484'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">history</span><span class="p">[</span><span class="nx">options</span><span class="p">.</span><span class="nx">replace</span> <span class="o">?</span> <span class="s1">&#39;replaceState&#39;</span> <span class="o">:</span> <span class="s1">&#39;pushState&#39;</span><span class="p">]({},</span> <span class="nb">document</span><span class="p">.</span><span class="nx">title</span><span class="p">,</span> <span class="nx">url</span><span class="p">);</span></div><div class='line' id='LC1485'><br/></div><div class='line' id='LC1486'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If hash changes haven&#39;t been explicitly disabled, update the hash</span></div><div class='line' id='LC1487'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// fragment to store history.</span></div><div class='line' id='LC1488'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_wantsHashChange</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1489'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_updateHash</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">location</span><span class="p">,</span> <span class="nx">fragment</span><span class="p">,</span> <span class="nx">options</span><span class="p">.</span><span class="nx">replace</span><span class="p">);</span></div><div class='line' id='LC1490'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">iframe</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">fragment</span> <span class="o">!==</span> <span class="k">this</span><span class="p">.</span><span class="nx">getFragment</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">getHash</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">iframe</span><span class="p">))))</span> <span class="p">{</span></div><div class='line' id='LC1491'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Opening and closing the iframe tricks IE7 and earlier to push a</span></div><div class='line' id='LC1492'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// history entry on hash-tag change.  When replace is true, we don&#39;t</span></div><div class='line' id='LC1493'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// want this.</span></div><div class='line' id='LC1494'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">options</span><span class="p">.</span><span class="nx">replace</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">iframe</span><span class="p">.</span><span class="nb">document</span><span class="p">.</span><span class="nx">open</span><span class="p">().</span><span class="nx">close</span><span class="p">();</span></div><div class='line' id='LC1495'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_updateHash</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">iframe</span><span class="p">.</span><span class="nx">location</span><span class="p">,</span> <span class="nx">fragment</span><span class="p">,</span> <span class="nx">options</span><span class="p">.</span><span class="nx">replace</span><span class="p">);</span></div><div class='line' id='LC1496'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1497'><br/></div><div class='line' id='LC1498'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If you&#39;ve told us that you explicitly don&#39;t want fallback hashchange-</span></div><div class='line' id='LC1499'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// based history, then `navigate` becomes a page refresh.</span></div><div class='line' id='LC1500'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1501'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">assign</span><span class="p">(</span><span class="nx">url</span><span class="p">);</span></div><div class='line' id='LC1502'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1503'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">trigger</span><span class="p">)</span> <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">loadUrl</span><span class="p">(</span><span class="nx">fragment</span><span class="p">);</span></div><div class='line' id='LC1504'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1505'><br/></div><div class='line' id='LC1506'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Update the hash location, either replacing the current entry, or adding</span></div><div class='line' id='LC1507'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// a new one to the browser history.</span></div><div class='line' id='LC1508'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_updateHash</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">location</span><span class="p">,</span> <span class="nx">fragment</span><span class="p">,</span> <span class="nx">replace</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1509'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">replace</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1510'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">href</span> <span class="o">=</span> <span class="nx">location</span><span class="p">.</span><span class="nx">href</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(javascript:|#).*$/</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC1511'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">location</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">href</span> <span class="o">+</span> <span class="s1">&#39;#&#39;</span> <span class="o">+</span> <span class="nx">fragment</span><span class="p">);</span></div><div class='line' id='LC1512'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1513'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Some browsers require that `hash` contains a leading #.</span></div><div class='line' id='LC1514'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">location</span><span class="p">.</span><span class="nx">hash</span> <span class="o">=</span> <span class="s1">&#39;#&#39;</span> <span class="o">+</span> <span class="nx">fragment</span><span class="p">;</span></div><div class='line' id='LC1515'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1516'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1517'><br/></div><div class='line' id='LC1518'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1519'><br/></div><div class='line' id='LC1520'>&nbsp;&nbsp;<span class="c1">// Create the default Backbone.history.</span></div><div class='line' id='LC1521'>&nbsp;&nbsp;<span class="nx">Backbone</span><span class="p">.</span><span class="nx">history</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">History</span><span class="p">;</span></div><div class='line' id='LC1522'><br/></div><div class='line' id='LC1523'>&nbsp;&nbsp;<span class="c1">// Helpers</span></div><div class='line' id='LC1524'>&nbsp;&nbsp;<span class="c1">// -------</span></div><div class='line' id='LC1525'><br/></div><div class='line' id='LC1526'>&nbsp;&nbsp;<span class="c1">// Helper function to correctly set up the prototype chain, for subclasses.</span></div><div class='line' id='LC1527'>&nbsp;&nbsp;<span class="c1">// Similar to `goog.inherits`, but uses a hash of prototype properties and</span></div><div class='line' id='LC1528'>&nbsp;&nbsp;<span class="c1">// class properties to be extended.</span></div><div class='line' id='LC1529'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">extend</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">protoProps</span><span class="p">,</span> <span class="nx">staticProps</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1530'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">parent</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1531'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">child</span><span class="p">;</span></div><div class='line' id='LC1532'><br/></div><div class='line' id='LC1533'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// The constructor function for the new subclass is either defined by you</span></div><div class='line' id='LC1534'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// (the &quot;constructor&quot; property in your `extend` definition), or defaulted</span></div><div class='line' id='LC1535'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// by us to simply call the parent&#39;s constructor.</span></div><div class='line' id='LC1536'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">protoProps</span> <span class="o">&amp;&amp;</span> <span class="nx">_</span><span class="p">.</span><span class="nx">has</span><span class="p">(</span><span class="nx">protoProps</span><span class="p">,</span> <span class="s1">&#39;constructor&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC1537'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">child</span> <span class="o">=</span> <span class="nx">protoProps</span><span class="p">.</span><span class="nx">constructor</span><span class="p">;</span></div><div class='line' id='LC1538'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1539'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">child</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span> <span class="k">return</span> <span class="nx">parent</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span> <span class="p">};</span></div><div class='line' id='LC1540'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1541'><br/></div><div class='line' id='LC1542'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Add static properties to the constructor function, if supplied.</span></div><div class='line' id='LC1543'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">child</span><span class="p">,</span> <span class="nx">parent</span><span class="p">,</span> <span class="nx">staticProps</span><span class="p">);</span></div><div class='line' id='LC1544'><br/></div><div class='line' id='LC1545'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Set the prototype chain to inherit from `parent`, without calling</span></div><div class='line' id='LC1546'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// `parent`&#39;s constructor function.</span></div><div class='line' id='LC1547'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">Surrogate</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span> <span class="k">this</span><span class="p">.</span><span class="nx">constructor</span> <span class="o">=</span> <span class="nx">child</span><span class="p">;</span> <span class="p">};</span></div><div class='line' id='LC1548'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Surrogate</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="nx">parent</span><span class="p">.</span><span class="nx">prototype</span><span class="p">;</span></div><div class='line' id='LC1549'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">child</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Surrogate</span><span class="p">;</span></div><div class='line' id='LC1550'><br/></div><div class='line' id='LC1551'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Add prototype properties (instance properties) to the subclass,</span></div><div class='line' id='LC1552'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// if supplied.</span></div><div class='line' id='LC1553'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">protoProps</span><span class="p">)</span> <span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">child</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="nx">protoProps</span><span class="p">);</span></div><div class='line' id='LC1554'><br/></div><div class='line' id='LC1555'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Set a convenience property in case the parent&#39;s prototype is needed</span></div><div class='line' id='LC1556'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// later.</span></div><div class='line' id='LC1557'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">child</span><span class="p">.</span><span class="nx">__super__</span> <span class="o">=</span> <span class="nx">parent</span><span class="p">.</span><span class="nx">prototype</span><span class="p">;</span></div><div class='line' id='LC1558'><br/></div><div class='line' id='LC1559'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">child</span><span class="p">;</span></div><div class='line' id='LC1560'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1561'><br/></div><div class='line' id='LC1562'>&nbsp;&nbsp;<span class="c1">// Set up inheritance for the model, collection, router, view and history.</span></div><div class='line' id='LC1563'>&nbsp;&nbsp;<span class="nx">Model</span><span class="p">.</span><span class="nx">extend</span> <span class="o">=</span> <span class="nx">Collection</span><span class="p">.</span><span class="nx">extend</span> <span class="o">=</span> <span class="nx">Router</span><span class="p">.</span><span class="nx">extend</span> <span class="o">=</span> <span class="nx">View</span><span class="p">.</span><span class="nx">extend</span> <span class="o">=</span> <span class="nx">History</span><span class="p">.</span><span class="nx">extend</span> <span class="o">=</span> <span class="nx">extend</span><span class="p">;</span></div><div class='line' id='LC1564'><br/></div><div class='line' id='LC1565'>&nbsp;&nbsp;<span class="c1">// Throw an error when a URL is needed, and none is supplied.</span></div><div class='line' id='LC1566'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">urlError</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1567'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;A &quot;url&quot; property or function must be specified&#39;</span><span class="p">);</span></div><div class='line' id='LC1568'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1569'><br/></div><div class='line' id='LC1570'>&nbsp;&nbsp;<span class="c1">// Wrap an optional error callback with a fallback error event.</span></div><div class='line' id='LC1571'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">wrapError</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">model</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1572'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">error</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">error</span><span class="p">;</span></div><div class='line' id='LC1573'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">error</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">resp</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1574'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">error</span><span class="p">)</span> <span class="nx">error</span><span class="p">(</span><span class="nx">model</span><span class="p">,</span> <span class="nx">resp</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC1575'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">model</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;error&#39;</span><span class="p">,</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">resp</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC1576'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1577'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1578'><br/></div><div class='line' id='LC1579'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Backbone</span><span class="p">;</span></div><div class='line' id='LC1580'><span class="p">}));</span></div></pre></div>
            </td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.09008s from github-fe135-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/amdjs/backbone/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

