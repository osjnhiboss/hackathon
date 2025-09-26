// Mock Data
const mockData = {
    platformStats: {
        totalVolumeTraded: 2400000,
        activeTraders: 15000,
        uptimeGuarantee: 95
    },
    dashboardStats: {
        totalVolume: 1152600,
        activeMarkets: 5,
        totalParticipants: 27095
    },
    markets: [
        {
            id: 'btc-100k-2024',
            category: 'Crypto',
            status: 'Active',
            question: 'Will Bitcoin reach $100,000 by end of 2024?',
            description: 'Predict whether Bitcoin (BTC) will reach or exceed $100,000 USD by December 31, 2024.',
            yesPercentage: 62,
            noPercentage: 38,
            yesPrice: 0.62,
            noPrice: 0.38,
            participants: 2847,
            totalVolume: 125400,
            endDate: new Date('2024-12-31'),
            progressPercentage: 75
        },
        {
            id: 'eth-staking-2024',
            category: 'Crypto',
            status: 'Active',
            question: 'Will Ethereum 2.0 staking exceed 50% of total supply?',
            description: 'Will more than 50% of all ETH be staked in Ethereum 2.0 by the end of 2024?',
            yesPercentage: 45,
            noPercentage: 55,
            yesPrice: 0.45,
            noPrice: 0.55,
            participants: 1654,
            totalVolume: 89300,
            endDate: new Date('2024-12-31'),
            progressPercentage: 60
        },
        {
            id: 'fifa-world-cup-2030',
            category: 'Sports',
            status: 'Active',
            question: 'Will the next FIFA World Cup be held in a new country?',
            description: 'Will the 2030 FIFA World Cup be hosted by a country that has never hosted before?',
            yesPercentage: 73,
            noPercentage: 27,
            yesPrice: 0.73,
            noPrice: 0.27,
            participants: 3421,
            totalVolume: 67800,
            endDate: new Date('2030-01-01'),
            progressPercentage: 85
        },
        {
            id: 'agi-before-2030',
            category: 'Technology',
            status: 'Active',
            question: 'Will AI achieve AGI before 2030?',
            description: 'Will artificial general intelligence (AGI) be achieved by any company before January 1, 2030?',
            yesPercentage: 34,
            noPercentage: 66,
            yesPrice: 0.34,
            noPrice: 0.66,
            participants: 5672,
            totalVolume: 234500,
            endDate: new Date('2030-01-01'),
            progressPercentage: 40
        },
        {
            id: 'us-election-2024',
            category: 'Politics',
            status: 'Resolved',
            question: 'Will the US election be decided by November 15, 2024?',
            description: 'Will the winner of the 2024 US Presidential election be officially determined by November 15, 2024?',
            yesPercentage: 89,
            noPercentage: 11,
            yesPrice: 0.89,
            noPrice: 0.11,
            participants: 8934,
            totalVolume: 456700,
            endDate: new Date('2024-11-15'),
            progressPercentage: 100
        },
        {
            id: 'blockdag-mainnet-q1-2025',
            category: 'Crypto',
            status: 'Active',
            question: 'Will BlockDAG mainnet launch in Q1 2025?',
            description: 'Will the BlockDAG mainnet be officially launched and operational in Q1 2025?',
            yesPercentage: 78,
            noPercentage: 22,
            yesPrice: 0.78,
            noPrice: 0.22,
            participants: 4567,
            totalVolume: 178900,
            endDate: new Date('2025-03-31'),
            progressPercentage: 90
        }
    ]
};

// Utility Functions
function formatCurrency(amount) {
    if (amount >= 1000000) {
        return `$${(amount / 1000000).toFixed(1)}M+`;
    }
    if (amount >= 1000) {
        return `$${(amount / 1000).toFixed(0)}K+`;
    }
    return `$${amount.toLocaleString()}`;
}

function formatNumber(num) {
    if (num >= 1000000) {
        return `${(num / 1000000).toFixed(1)}M+`;
    }
    if (num >= 1000) {
        return `${(num / 1000).toFixed(0)}K+`;
    }
    return num.toLocaleString();
}

function formatPercentage(percentage) {
    return `${percentage}%`;
}

function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}

function formatDate(date) {
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}

function getCategoryClass(category) {
    const classes = {
        'Crypto': 'badge-crypto',
        'Sports': 'badge-sports',
        'Technology': 'badge-technology',
        'Politics': 'badge-politics'
    };
    return classes[category] || 'badge-crypto';
}

// Global State
let filteredMarkets = [...mockData.markets];
let currentFilters = {
    search: '',
    category: '',
    status: ''
};

// DOM Elements
const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');
const statusFilter = document.getElementById('status-filter');
const marketsGrid = document.getElementById('markets-grid');
const resultsText = document.getElementById('results-text');

// Initialize the application
function init() {
    updatePlatformStats();
    updateDashboardStats();
    renderMarkets();
    setupEventListeners();
}

// Update platform statistics in hero section
function updatePlatformStats() {
    const { platformStats } = mockData;
    document.getElementById('total-volume-stat').textContent = formatCurrency(platformStats.totalVolumeTraded);
    document.getElementById('active-traders-stat').textContent = formatNumber(platformStats.activeTraders);
    document.getElementById('uptime-stat').textContent = formatPercentage(platformStats.uptimeGuarantee);
}

// Update dashboard statistics
function updateDashboardStats() {
    const { dashboardStats } = mockData;
    document.getElementById('dashboard-total-volume').textContent = formatCurrency(dashboardStats.totalVolume);
    document.getElementById('dashboard-active-markets').textContent = dashboardStats.activeMarkets;
    document.getElementById('dashboard-participants').textContent = formatNumber(dashboardStats.totalParticipants);
}

// Create market card HTML
function createMarketCard(market) {
    const isResolved = market.status === 'Resolved';
    
    return `
        <div class="market-card">
            <div class="market-card-content">
                <div class="market-badges">
                    <span class="badge ${getCategoryClass(market.category)}">${market.category}</span>
                    <div class="status-indicator">
                        <div class="status-dot ${market.status.toLowerCase()}"></div>
                        <span class="status-text ${market.status.toLowerCase()}">${market.status}</span>
                    </div>
                </div>

                <h3 class="market-question">${market.question}</h3>
                <p class="market-description">${market.description}</p>

                <div class="voting-options">
                    <div class="vote-option yes">
                        <div class="vote-header">
                            <span class="vote-icon">📈</span>
                            <span class="vote-label">YES</span>
                        </div>
                        <div class="vote-percentage">${market.yesPercentage}%</div>
                        <div class="vote-price">${formatPrice(market.yesPrice)}</div>
                    </div>
                    <div class="vote-option no">
                        <div class="vote-header">
                            <span class="vote-icon">📉</span>
                            <span class="vote-label">NO</span>
                        </div>
                        <div class="vote-percentage">${market.noPercentage}%</div>
                        <div class="vote-price">${formatPrice(market.noPrice)}</div>
                    </div>
                </div>

                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${market.progressPercentage}%"></div>
                </div>

                <div class="market-info">
                    <div class="info-item">
                        <span>👥</span>
                        <span>${market.participants.toLocaleString()} participants</span>
                    </div>
                    <div class="info-item">
                        <span>⏰</span>
                        <span>Ends ${formatDate(market.endDate)}</span>
                    </div>
                </div>

                <div class="market-volume">
                    <div class="volume-value">${formatCurrency(market.totalVolume)}</div>
                    <div class="volume-label">Total Volume</div>
                </div>
            </div>

            <div class="market-card-footer">
                <button class="trade-btn ${isResolved ? 'view-results' : ''}" 
                        onclick="handleMarketAction('${market.id}', ${isResolved})">
                    ${isResolved ? 'View Results' : 'Trade'}
                </button>
            </div>
        </div>
    `;
}

// Render markets grid
function renderMarkets() {
    if (filteredMarkets.length === 0) {
        marketsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
                <p style="color: #64748b; font-size: 1.125rem;">No markets found matching your criteria.</p>
            </div>
        `;
    } else {
        marketsGrid.innerHTML = filteredMarkets.map(createMarketCard).join('');
    }
    
    updateResultsCount();
}

// Update results count
function updateResultsCount() {
    const total = mockData.markets.length;
    const showing = filteredMarkets.length;
    resultsText.textContent = `Showing ${showing} of ${total} markets`;
}

// Filter markets based on current filters
function filterMarkets() {
    filteredMarkets = mockData.markets.filter(market => {
        const matchesSearch = !currentFilters.search || 
            market.question.toLowerCase().includes(currentFilters.search.toLowerCase()) ||
            market.description.toLowerCase().includes(currentFilters.search.toLowerCase());
        
        const matchesCategory = !currentFilters.category || 
            market.category === currentFilters.category;
        
        const matchesStatus = !currentFilters.status || 
            market.status === currentFilters.status;
        
        return matchesSearch && matchesCategory && matchesStatus;
    });
    
    renderMarkets();
}

// Event Listeners
function setupEventListeners() {
    // Search input
    searchInput.addEventListener('input', (e) => {
        currentFilters.search = e.target.value;
        filterMarkets();
    });

    // Category filter
    categoryFilter.addEventListener('change', (e) => {
        currentFilters.category = e.target.value;
        filterMarkets();
    });

    // Status filter
    statusFilter.addEventListener('change', (e) => {
        currentFilters.status = e.target.value;
        filterMarkets();
    });

    // Button event listeners
    document.getElementById('create-market-btn').addEventListener('click', handleCreateMarket);
    document.getElementById('connect-wallet-btn').addEventListener('click', handleConnectWallet);
    document.getElementById('hero-create-market').addEventListener('click', handleCreateMarket);
    document.getElementById('learn-more-btn').addEventListener('click', handleLearnMore);

    // Mobile menu toggle
    document.getElementById('mobile-menu-toggle').addEventListener('click', toggleMobileMenu);
}

// Event Handlers
function handleCreateMarket() {
    alert('Create Market functionality would be implemented here');
    console.log('Create market clicked');
}

function handleConnectWallet() {
    alert('Connect Wallet functionality would be implemented here');
    console.log('Connect wallet clicked');
}

function handleLearnMore() {
    alert('Learn More functionality would be implemented here');
    console.log('Learn more clicked');
}

function handleMarketAction(marketId, isResolved) {
    if (isResolved) {
        alert(`Viewing results for market: ${marketId}`);
        console.log('Viewing results for market:', marketId);
    } else {
        alert(`Trading on market: ${marketId}`);
        console.log('Trading on market:', marketId);
    }
}

function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Portfolio Mock Data
const portfolioMockData = {
    portfolioStats: {
        portfolioValue: 1250.43,
        portfolioGain: 270.43,
        portfolioGainPercentage: 27.6,
        totalInvested: 980.00,
        totalMarkets: 17,
        activePredictions: 5,
        winRate: 75,
        totalWins: 9,
        totalPredictions: 12
    },
    activePredictions: [
        {
            id: 'btc-100k-2024',
            question: 'Will Bitcoin reach $100,000 by end of 2024?',
            position: 'YES',
            shares: 45,
            endDate: new Date('2024-12-31'),
            invested: 26.10,
            currentValue: 27.90,
            pnl: 1.80
        },
        {
            id: 'blockdag-mainnet-q1-2025',
            question: 'Will BlockDAG mainnet launch in Q1 2025?',
            position: 'YES',
            shares: 32,
            endDate: new Date('2025-03-31'),
            invested: 23.04,
            currentValue: 24.96,
            pnl: 1.92
        },
        {
            id: 'agi-before-2030',
            question: 'Will AI achieve AGI before 2030?',
            position: 'NO',
            shares: 28,
            endDate: new Date('2030-01-01'),
            invested: 19.60,
            currentValue: 18.48,
            pnl: -1.12
        }
    ],
    historyPredictions: [
        {
            id: 'us-election-2024',
            question: 'Will the US election be decided by November 15, 2024?',
            status: 'WON',
            predicted: 'YES',
            resolved: 'YES',
            shares: 50,
            invested: 42.50,
            payout: 50.00,
            pnl: 7.50,
            returnPercentage: 17.6
        },
        {
            id: 'eth-5000-2024',
            question: 'Will Ethereum reach $5,000 in 2024?',
            status: 'LOST',
            predicted: 'YES',
            resolved: 'NO',
            shares: 35,
            invested: 22.75,
            payout: 0.00,
            pnl: -22.75,
            returnPercentage: -100.0
        }
    ]
};

// Portfolio Utility Functions
function formatBDAG(amount) {
    return `${amount.toFixed(2)} BDAG`;
}

function formatPnL(amount) {
    const sign = amount >= 0 ? '+' : '';
    return `${sign}${amount.toFixed(2)} BDAG`;
}

function formatPercentageGain(amount, percentage) {
    const sign = amount >= 0 ? '+' : '';
    return `${sign}${amount.toFixed(2)} (${percentage.toFixed(1)}%)`;
}

function formatReturn(percentage) {
    const sign = percentage >= 0 ? '' : '';
    return `${sign}${percentage.toFixed(1)}%`;
}

function getPnLClass(amount) {
    if (amount > 0) return 'pnl-positive';
    if (amount < 0) return 'pnl-negative';
    return 'pnl-neutral';
}

// Portfolio Functions
function showPortfolio() {
    // Hide markets page and show portfolio
    document.querySelector('.hero').style.display = 'none';
    document.querySelector('.dashboard').style.display = 'none';
    document.querySelector('.filters').style.display = 'none';
    document.querySelector('.markets').style.display = 'none';
    document.getElementById('portfolio-page').style.display = 'block';
    
    // Update navigation
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.nav-btn:nth-child(2)').classList.add('active');
    
    initializePortfolio();
}

function showMarkets() {
    // Show markets page and hide portfolio
    document.querySelector('.hero').style.display = 'block';
    document.querySelector('.dashboard').style.display = 'block';
    document.querySelector('.filters').style.display = 'block';
    document.querySelector('.markets').style.display = 'block';
    document.getElementById('portfolio-page').style.display = 'none';
    
    // Update navigation
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.nav-btn:nth-child(1)').classList.add('active');
}

function initializePortfolio() {
    updatePortfolioStats();
    renderActivePredictions();
    renderHistoryPredictions();
}

function updatePortfolioStats() {
    const { portfolioStats } = portfolioMockData;
    
    document.getElementById('portfolio-value').textContent = formatBDAG(portfolioStats.portfolioValue);
    document.getElementById('portfolio-gain').textContent = 
        formatPercentageGain(portfolioStats.portfolioGain, portfolioStats.portfolioGainPercentage);
    document.getElementById('total-invested').textContent = formatBDAG(portfolioStats.totalInvested);
    document.getElementById('active-predictions').textContent = portfolioStats.activePredictions;
    document.getElementById('win-rate').textContent = `${portfolioStats.winRate}%`;
}

function renderActivePredictions() {
    const tbody = document.getElementById('active-predictions-tbody');
    const { activePredictions } = portfolioMockData;
    
    tbody.innerHTML = activePredictions.map(prediction => `
        <tr>
            <td>
                <div class="market-question">${prediction.question}</div>
            </td>
            <td>
                <span class="position-badge ${prediction.position.toLowerCase()}">${prediction.position}</span>
            </td>
            <td>${prediction.shares} shares</td>
            <td>${formatDate(prediction.endDate)}</td>
            <td>${formatBDAG(prediction.invested)}</td>
            <td>${formatBDAG(prediction.currentValue)}</td>
            <td class="${getPnLClass(prediction.pnl)}">${formatPnL(prediction.pnl)}</td>
            <td>
                <button class="view-market-btn" onclick="viewMarket('${prediction.id}')">
                    View Market
                </button>
            </td>
        </tr>
    `).join('');
}

function renderHistoryPredictions() {
    const tbody = document.getElementById('history-predictions-tbody');
    const { historyPredictions } = portfolioMockData;
    
    tbody.innerHTML = historyPredictions.map(prediction => `
        <tr>
            <td>
                <div class="market-question">${prediction.question}</div>
            </td>
            <td>
                <span class="outcome-badge ${prediction.status.toLowerCase()}">${prediction.status}</span>
            </td>
            <td>
                <div>
                    Predicted: <span class="position-badge ${prediction.predicted.toLowerCase()}">${prediction.predicted}</span><br>
                    Resolved: <span class="position-badge ${prediction.resolved.toLowerCase()}">${prediction.resolved}</span>
                </div>
            </td>
            <td>${prediction.shares} shares</td>
            <td>${formatBDAG(prediction.invested)}</td>
            <td>${formatBDAG(prediction.payout)}</td>
            <td class="${getPnLClass(prediction.pnl)}">${formatPnL(prediction.pnl)}</td>
            <td class="${getPnLClass(prediction.returnPercentage)}">${formatReturn(prediction.returnPercentage)}</td>
        </tr>
    `).join('');
}

function switchTab(tabType) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`${tabType}-tab`).classList.add('active');
    
    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.getElementById(`${tabType}-content`).classList.add('active');
}

function viewMarket(marketId) {
    alert(`Viewing market: ${marketId}`);
    console.log('View market:', marketId);
}

// Update the existing navigation event listeners
function updateNavigationForPortfolio() {
    // Update the Portfolio button click handler
    const portfolioBtn = document.querySelector('.nav-btn:nth-child(2)');
    if (portfolioBtn) {
        portfolioBtn.addEventListener('click', showPortfolio);
    }
    
    // Update the Markets button click handler
    const marketsBtn = document.querySelector('.nav-btn:nth-child(1)');
    if (marketsBtn) {
        marketsBtn.addEventListener('click', showMarkets);
    }
}

// Initialize portfolio navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add the portfolio page HTML to the body if it doesn't exist
    if (!document.getElementById('portfolio-page')) {
        // You'll need to add the portfolio HTML structure here
        // or include it directly in your HTML file
    }
    
    updateNavigationForPortfolio();
});

// Create Market State
let createMarketData = {
    title: '',
    description: '',
    category: '',
    endDate: '',
    tags: [],
    initialPrice: 0.5,
    minimumBet: 1,
    creatorFee: 2.5
};

// Create Market Functions
function showCreateMarket() {
    // Hide other pages
    document.querySelector('.hero').style.display = 'none';
    document.querySelector('.dashboard').style.display = 'none';
    document.querySelector('.filters').style.display = 'none';
    document.querySelector('.markets').style.display = 'none';
    document.getElementById('portfolio-page').style.display = 'none';
    document.getElementById('create-market-page').style.display = 'block';
    
    // Update navigation
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.nav-btn:nth-child(3)').classList.add('active');
    
    initializeCreateMarket();
}

function initializeCreateMarket() {
    setupCreateMarketEventListeners();
    updatePreview();
}

function setupCreateMarketEventListeners() {
    // Form inputs
    document.getElementById('market-title').addEventListener('input', handleTitleChange);
    document.getElementById('market-description').addEventListener('input', handleDescriptionChange);
    document.getElementById('market-category').addEventListener('change', handleCategoryChange);
    document.getElementById('end-date').addEventListener('change', handleEndDateChange);
    
    // Tags
    document.getElementById('add-tag-btn').addEventListener('click', addTag);
    document.getElementById('tag-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            addTag();
        }
    });
    
    // Parameters
    document.getElementById('initial-price').addEventListener('input', handleParameterChange);
    document.getElementById('minimum-bet').addEventListener('input', handleParameterChange);
    document.getElementById('creator-fee').addEventListener('input', handleParameterChange);
    
    // Submit
    document.getElementById('create-market-submit').addEventListener('click', handleCreateMarketSubmit);
}

function handleTitleChange(e) {
    const title = e.target.value;
    createMarketData.title = title;
    
    // Update character count
    document.getElementById('title-count').textContent = title.length;
    
    updatePreview();
}

function handleDescriptionChange(e) {
    const description = e.target.value;
    createMarketData.description = description;
    
    // Update character count
    document.getElementById('description-count').textContent = description.length;
    
    updatePreview();
}

function handleCategoryChange(e) {
    createMarketData.category = e.target.value;
    updatePreview();
}

function handleEndDateChange(e) {
    createMarketData.endDate = e.target.value;
    updatePreview();
}

function addTag() {
    const tagInput = document.getElementById('tag-input');
    const tag = tagInput.value.trim();
    
    if (tag && createMarketData.tags.length < 5 && !createMarketData.tags.includes(tag)) {
        createMarketData.tags.push(tag);
        tagInput.value = '';
        renderTags();
        updateTagsCount();
        updatePreview();
    }
}

function removeTag(tagToRemove) {
    createMarketData.tags = createMarketData.tags.filter(tag => tag !== tagToRemove);
    renderTags();
    updateTagsCount();
    updatePreview();
}

function renderTags() {
    const tagsList = document.getElementById('tags-list');
    tagsList.innerHTML = createMarketData.tags.map(tag => `
        <div class="tag">
            ${tag}
            <button type="button" class="tag-remove" onclick="removeTag('${tag}')">×</button>
        </div>
    `).join('');
}

function updateTagsCount() {
    document.getElementById('tags-count').textContent = createMarketData.tags.length;
}

function handleParameterChange() {
    createMarketData.initialPrice = parseFloat(document.getElementById('initial-price').value);
    createMarketData.minimumBet = parseInt(document.getElementById('minimum-bet').value);
    createMarketData.creatorFee = parseFloat(document.getElementById('creator-fee').value);
    
    updatePreview();
}

function updatePreview() {
    const hasRequiredFields = createMarketData.title && createMarketData.description && 
                             createMarketData.category && createMarketData.endDate;
    
    const placeholder = document.getElementById('preview-placeholder');
    const content = document.getElementById('preview-content');
    const submitBtn = document.getElementById('create-market-submit');
    
    if (hasRequiredFields) {
        placeholder.style.display = 'none';
        content.style.display = 'block';
        
        // Update preview content
        document.getElementById('preview-category').textContent = createMarketData.category;
        document.getElementById('preview-question').textContent = createMarketData.title;
        document.getElementById('preview-description').textContent = createMarketData.description;
        
        // Update voting percentages
        const yesPercent = Math.round(createMarketData.initialPrice * 100);
        const noPercent = 100 - yesPercent;
        
        document.getElementById('preview-yes-percent').textContent = `${yesPercent}%`;
        document.getElementById('preview-no-percent').textContent = `${noPercent}%`;
        document.getElementById('preview-yes-price').textContent = `$${createMarketData.initialPrice.toFixed(2)}`;
        document.getElementById('preview-no-price').textContent = `$${(1 - createMarketData.initialPrice).toFixed(2)}`;
        
        // Enable submit button
        submitBtn.disabled = false;
        submitBtn.classList.add('ready');
    } else {
        placeholder.style.display = 'block';
        content.style.display = 'none';
        
        // Disable submit button
        submitBtn.disabled = true;
        submitBtn.classList.remove('ready');
    }
}

function handleCreateMarketSubmit() {
    if (!validateCreateMarketForm()) {
        return;
    }
    
    // Show confirmation
    const confirmed = confirm(`
        Create this prediction market?
        
        Title: ${createMarketData.title}
        Category: ${createMarketData.category}
        End Date: ${createMarketData.endDate}
        
        Total Cost: 110 BDAG
    `);
    
    if (confirmed) {
        alert('Market created successfully! (This is a demo)');
        console.log('Creating market with data:', createMarketData);
        
        // Reset form and go back to markets
        resetCreateMarketForm();
        showMarkets();
    }
}

function validateCreateMarketForm() {
    const errors = [];
    
    if (!createMarketData.title) errors.push('Market title is required');
    if (!createMarketData.description) errors.push('Market description is required');
    if (!createMarketData.category) errors.push('Category is required');
    if (!createMarketData.endDate) errors.push('End date is required');
    
    // Check if end date is in the future
    if (createMarketData.endDate && new Date(createMarketData.endDate) <= new Date()) {
        errors.push('End date must be in the future');
    }
    
    if (errors.length > 0) {
        alert('Please fix the following errors:\n\n' + errors.join('\n'));
        return false;
    }
    
    return true;
}

function resetCreateMarketForm() {
    createMarketData = {
        title: '',
        description: '',
        category: '',
        endDate: '',
        tags: [],
        initialPrice: 0.5,
        minimumBet: 1,
        creatorFee: 2.5
    };
    
    // Reset form fields
    document.getElementById('create-market-form').reset();
    document.getElementById('initial-price').value = '0.50';
    document.getElementById('minimum-bet').value = '1';
    document.getElementById('creator-fee').value = '2.5';
    
    // Reset counters
    document.getElementById('title-count').textContent = '0';
    document.getElementById('description-count').textContent = '0';
    document.getElementById('tags-count').textContent = '0';
    
    // Clear tags
    document.getElementById('tags-list').innerHTML = '';
    
    updatePreview();
}

// Update navigation to include Create Market
function updateNavigationForCreateMarket() {
    const createMarketBtn = document.querySelector('.nav-btn:nth-child(3)');
    if (createMarketBtn) {
        createMarketBtn.addEventListener('click', showCreateMarket);
    }
}

// Initialize create market when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    updateNavigationForCreateMarket();
});