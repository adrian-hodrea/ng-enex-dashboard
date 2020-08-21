# Contributing

### Development guidline

For consistency better structure and maintainability we will follow these simple rules of project architecture:

- Each business entity should have it's own module.
- Each module should be included in a directory with the entity name.
- Each directory can contain a **pages/components** directory in case the module will contain page views.
- The components directory should contain only reusable components that are designed to be used across this module.
- The **pages** directory will have it's own subdirectories that can be modules themselves in order to lazy load them.
- All reusable **components/directives/pipes** should be added to the shared module.
- Each feature module should import the shared.module.
- Services should be defined in each entity directory and use for root instead of providing it in the module. Avoid this when you need to have multiple instances on a service, in that case it should be provided on a module/component level.

Example structure:

/auth
  - auth-routing.module.ts
  - auth.module.ts
  - auth.service.ts
  - /components
    - special-login-button.component.ts
    - index.ts // should import and export all components
  - /pages
    - /login
      - login.service.ts
      - login.module.ts
      - login.component.ts
      - login.component.html
    - /register
      - /pages
          - /register-user
          - /register-company

/shared
  - /components
    - index.ts
    - button.component.ts
  - /directives
  - /pipes
  - shared.module.ts


## Workflow

- Create your branch Type / Task number - Task description (Ex: **git checkout -b feature/W&D100-add-user-description**)

- Commit and push to the remote branch **git push** (also set upstream branch for newly created ones)

## Pull Request

- Before creating a pull request be sure the coding guidelines and commit message structure has been respected

- Rebase your changes onto the latest version of the master branch

- Submit the pull request to your other colleagues / mentors (they should be added as reviewers)

## Coding rules

### To ensure consistency throughout the source code, keep these rules in mind as you are working:

- We follow the angular style guide so check that out: https://angular.io/guide/styleguide

<br>

## Commit Message Guidelines
We have very precise rules over how our git commit messages can be formatted. This leads to more readable messages that are easy to follow when looking through the project history.

### Commit mesage structure:

> <code> 'type (scope): subject (ticket number if exists)' </code>

## Where: 
  
  ### Type

    Must be one of the following:

- feat: A new feature
- fix: A bug fix
- docs: Documentation only changes
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- refactor: A code change that neither fixes a bug nor adds a feature
- perf: A code change that improves performance
- test: Adding missing tests or correcting existing tests
- build: Changes that affect the build system, CI configuration or external dependencies (example scopes: gulp, broccoli, npm)
- chore: Other changes that don't modify src or test files

### Scope

- The scope could be anything specifying place of the commit change. For example auth, leader board etc.

### Subject

 - The subject contains succinct description of the change:

    - use the imperative, present tense: "change" not "changed" nor "changes"
    - don't capitalize first letter
    - no dot (.) at the end
