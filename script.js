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