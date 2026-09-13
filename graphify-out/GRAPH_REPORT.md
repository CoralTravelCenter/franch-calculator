# Graph Report - franch-calculator  (2026-09-13)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 209 nodes · 317 edges · 14 communities (12 shown, 2 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 6 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `04f91ab3`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- App.vue
- utils.js
- package.json
- dependencies
- components.json
- SuccessResult.vue
- ToggleGroupItem.vue
- useCalculatorWizard
- steps/FourStep.vue
- include
- hostPage.js
- vite.config.js

## God Nodes (most connected - your core abstractions)
1. `cn()` - 13 edges
2. `useCalculatorContext()` - 9 edges
3. `useCalculatorWizard()` - 9 edges
4. `formatDigits()` - 6 edges
5. `parseDigits()` - 6 edges
6. `aliases` - 6 edges
7. `tailwind` - 6 edges
8. `resolveResultScenario()` - 5 edges
9. `resolveRoiPeriod()` - 5 edges
10. `formatCurrency()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `resultScenario` --calls--> `resolveResultScenario()`  [EXTRACTED]
  src/components/SuccessResult.vue → src/config/calculatorResults.js
- `roiPeriod` --calls--> `resolveRoiPeriod()`  [EXTRACTED]
  src/components/SuccessResult.vue → src/config/calculatorResults.js
- `calculateResult()` --calls--> `calculator()`  [EXTRACTED]
  src/composables/useCalculatorWizard.js → src/calculator.js

## Import Cycles
- None detected.

## Communities (14 total, 2 thin omitted)

### Community 0 - "App.vue"
Cohesion: 0.13
Nodes (15): activeStep, calculatorWizard, {integration}, resultComponent, steps, stepsStack, {
    calculateResult,
    currentStep,
    isCurrentStepValid,
    jumpToApplicationForm,
    nextStep,
    previousStep,
    reset,
    resultSucceeded,
    showResult,
    totalSteps,
}, {isCurrentStepValid, nextStep, params, updateParam} (+7 more)

### Community 1 - "utils.js"
Cohesion: 0.09
Nodes (18): delegatedProps, emits, forwarded, props, inputGroupAddonVariants, props, props, attrs (+10 more)

### Community 2 - "package.json"
Cohesion: 0.09
Nodes (22): less, devDependencies, less, tw-animate-css, typograf, vite, @vitejs/plugin-vue, vitest (+14 more)

### Community 3 - "dependencies"
Cohesion: 0.10
Nodes (21): class-variance-authority, clsx, @lucide/vue, dependencies, class-variance-authority, clsx, @lucide/vue, reka-ui (+13 more)

### Community 4 - "components.json"
Cohesion: 0.10
Nodes (20): aliases, components, composables, lib, ui, utils, font, iconLibrary (+12 more)

### Community 5 - "SuccessResult.vue"
Cohesion: 0.20
Nodes (16): {calculationResult, orderCallback, params}, resultScenario, roiPeriod, CALCULATOR_RESULT_CONFIG, resolveByRules(), resolveResultScenario(), resolveRoiPeriod(), RESULT_SCENARIO (+8 more)

### Community 6 - "ToggleGroupItem.vue"
Cohesion: 0.12
Nodes (13): delegatedProps, emits, forwarded, props, context, delegatedProps, forwardedProps, props (+5 more)

### Community 7 - "useCalculatorWizard"
Cohesion: 0.19
Nodes (8): calculator(), immutable, rent, salary, createInitialParams(), useCalculatorWizard(), calculateResult(), reset()

### Community 8 - "steps/FourStep.vue"
Cohesion: 0.18
Nodes (7): {isCurrentStepValid, nextStep, params, updateParam}, rent_cost_BC, rent_cost_SR, rent_cost_TC, useCustomRent, props, buttonVariants

### Community 9 - "include"
Cohesion: 0.25
Nodes (7): compilerOptions, baseUrl, paths, include, src/**/*.js, src/**/*.vue, vite.config.js

## Knowledge Gaps
- **97 isolated node(s):** `activeStep`, `calculatorWizard`, `{integration}`, `resultComponent`, `steps` (+92 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `utils.js` to `App.vue`, `steps/FourStep.vue`, `ToggleGroupItem.vue`?**
  _High betweenness centrality (0.048) - this node is a cross-community bridge._
- **Why does `useCalculatorWizard()` connect `useCalculatorWizard` to `App.vue`?**
  _High betweenness centrality (0.033) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **Are the 5 inferred relationships involving `useCalculatorWizard()` (e.g. with `calculateResult()` and `nextStep()`) actually correct?**
  _`useCalculatorWizard()` has 5 INFERRED edges - model-reasoned connections that need verification._
- **What connects `activeStep`, `calculatorWizard`, `{integration}` to the rest of the system?**
  _97 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `App.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._
- **Should `utils.js` be split into smaller, more focused modules?**
  _Cohesion score 0.09195402298850575 - nodes in this community are weakly interconnected._